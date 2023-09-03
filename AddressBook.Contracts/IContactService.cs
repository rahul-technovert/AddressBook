using System.Collections.Generic;
using AddressBook.Concerns;

namespace AddressBook.Contracts
{
    public interface IContactService
    {
        ICollection<ContactCard> GetCards();

        Contact GetContact(int id);

        Contact CreateContact(Contact contact);

        void UpdateContact(Contact contact);

        bool DeleteContact(int id);
    }
}
