using AddressBook.Models;

namespace AddressBook.Interfaces
{
    public interface IContactService
    {
        public ICollection<ContactCard> GetCards();

        public Contact GetContact(int id);

        public Contact CreateContact(Contact contact);

        public void UpdateContact(Contact contact);

        public bool DeleteContact(int id);
    }
}
