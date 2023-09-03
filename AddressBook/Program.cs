using AddressBook.Services;
using AddressBook.Services.Contexts;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOrigin",
        builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

//registering services here

string connectionString = builder.Configuration.GetConnectionString("Default");

Console.WriteLine($"Connection string: {connectionString}");


builder.Services.AddSingleton<DapperContext>(provider => new DapperContext(connectionString));
builder.Services.AddScoped<DbServices>();
builder.Services.AddScoped<ContactServices>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowAnyOrigin");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
