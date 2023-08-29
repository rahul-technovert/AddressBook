using System.ComponentModel.DataAnnotations;

namespace AddressBook.Models
{
    public class Contact : ContactCard
    {
        public string Address { get; set; }

        public string Landline { get; set; }

        public string Website { get; set; }
    }
}
