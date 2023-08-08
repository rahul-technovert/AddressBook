using System.ComponentModel.DataAnnotations;

namespace AddressBook.Models
{
    public class Contact
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(255)]
        public string Address { get; set; }

        [Required]
        [StringLength(10)]
        public string Mobile { get; set; }

        [Required]
        [StringLength(10)]
        public string Landline { get; set; }

        [Required]
        [StringLength(100)]
        public string Website { get; set; }
    }
}
