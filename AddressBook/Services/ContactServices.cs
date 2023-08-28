using AddressBook.Contexts;
using AddressBook.Interfaces;
using AddressBook.Models;

namespace AddressBook.Services
{
    public class ContactServices : IContactService
    {
        private AddressBookContext _context;

        public ContactServices(AddressBookContext context)
        {
            this._context = context;
        }

        public Contact GetContact(int id)
        {
            return this._context.Contacts.Find(id);
        }

        public ICollection<ContactCard> GetCards()
        {
            return this._context.ContactCards.ToList();
        }

        public bool DeleteContact(int id)
        {
            Contact contact = this.GetContact(id);

            if (contact == null)
                return false;

            this._context.Contacts.Remove(contact);
            this._context.SaveChanges();
            return true;
        }

        public void CreateContact(Contact contact)
        {
            this._context.Contacts.Add(contact);
            this._context.SaveChanges();
        }

        public void UpdateContact(Contact contact)
        {
            Contact dbContact= this.GetContact(contact.Id);
            this.MapContact(contact, dbContact);
            this._context.SaveChanges();
        }

        private void MapContact(Contact updatedContact, Contact dbContact)
        {
            dbContact.Email = updatedContact.Email;
            dbContact.Address = updatedContact.Address;
            dbContact.Landline = updatedContact.Landline;
            dbContact.Website = updatedContact.Website;
            dbContact.Mobile = updatedContact.Mobile;
            dbContact.Name = updatedContact.Name;
        }
    }
}
