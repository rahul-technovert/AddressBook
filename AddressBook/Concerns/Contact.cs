﻿using System.ComponentModel.DataAnnotations;

namespace AddressBook.Models
{
    public class Contact
    {
        public int Id { get; set; }

        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        public string Address { get; set; }

        public string Mobile { get; set; }

        public string Landline { get; set; }

        public string Website { get; set; }
    }
}
