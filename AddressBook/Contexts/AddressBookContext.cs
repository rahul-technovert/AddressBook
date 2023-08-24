using AddressBook.Models;
using Microsoft.EntityFrameworkCore;

namespace AddressBook.Contexts
{
    public class AddressBookContext : DbContext
    {
        public AddressBookContext(DbContextOptions<AddressBookContext> options) : base(options)
        {
            
        }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<ContactCard> ContactCards { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           modelBuilder.Entity<ContactCard>().ToView("ContactCardView").HasKey(c => c.Id);  
        }
    }

}

