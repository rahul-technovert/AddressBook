using AddressBook.API.Concerns.Concerns;
using AddressBook.Contracts;
using Dapper;

namespace AddressBook.API.Services
{
    public class ContactServices  : IContactService
    {
        private DbServices _services;

        public ContactServices(DbServices services)
        {
            this._services = services;
        }

        public Contact GetContact(int id)
        {
            return this._services.Get<Contact>("Contacts", id);
        }

        public ICollection<ContactCard> GetCards()
        {
            return this._services.GetAll<ContactCard>("ContactCardView");
        }

        public bool DeleteContact(int id)
        {
            Contact contact = this.GetContact(id);

            if (contact == null)
                return false;

            this._services.Delete(Query.DeleteContact , id);
            return true;
        }

        public Contact CreateContact(Contact contact)
        {
            DynamicParameters dynamicParameters = new DynamicParameters(contact);
            contact.Id = this._services.Post(Query.CreateContact, dynamicParameters);
            return contact;
        }

        public void UpdateContact(Contact contact)
        {
            DynamicParameters dynamicParameters = new DynamicParameters(contact);
            this._services.Put(Query.UpdateContact, dynamicParameters);
        }
    }
}
