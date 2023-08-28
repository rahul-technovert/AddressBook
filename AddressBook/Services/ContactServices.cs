using AddressBook.API.Concerns;
using AddressBook.API.Services;
using AddressBook.Models;
using Dapper;

namespace AddressBook.Services
{
    public class ContactServices 
    {
        private DbServices _services;

        public ContactServices(DbServices services)
        {
            this._services = services;
        }

        public Contact GetContact(int id)
        {
            return this._services.Get<Contact>(Query.GetContactById, id);
        }

        public ICollection<ContactCard> GetCards()
        {
            return this._services.GetAll<ContactCard>(Query.GetAllCards);
        }

        public bool DeleteContact(int id)
        {
            Contact contact = this.GetContact(id);

            if (contact == null)
                return false;

            this._services.Delete(Query.DeleteContactById, id);
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
