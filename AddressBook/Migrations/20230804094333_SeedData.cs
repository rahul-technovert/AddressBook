using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AddressBook.Migrations
{
    /// <inheritdoc />
    public partial class SeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Contacts (Name, Email, Address, Mobile, Landline, Website) VALUES ('Pankaj Shukla', 'shukla@gmail.com', 'XYZ, Telnagana, HYD', '9090990909', '9090990909', 'www.xyz.com')");
            migrationBuilder.Sql("INSERT INTO Contacts (Name, Email, Address, Mobile, Landline, Website) VALUES ('Rahul Shukla', 'rahul@gmail.com', 'XYZ, Telnagana, HYD', '9090990909', '9090990909', 'www.xyz.com')");
            migrationBuilder.Sql("INSERT INTO Contacts (Name, Email, Address, Mobile, Landline, Website) VALUES ('Rakesh Shukla', 'rakesh@gmail.com', 'XYZ, Telnagana, HYD', '9090990909', '9090990909', 'www.xyz.com')");

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("TRUNCATE TABLE Contacts");
        }
    }
}
