using AddressBook.Concerns;
using AddressBook.Contracts;
using AddressBook.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;


namespace AddressBook.API.Controllers
{
    [EnableCors("AllowAnyOrigin")]
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private IContactService _contactService;

        public ContactsController(ContactServices services)
        {
            this._contactService = services;
        }

        [HttpGet("cards")]
        public IActionResult GetCards()
        {
            return Ok(this._contactService.GetCards());
        }

        [HttpGet("{id}")]
        public IActionResult GetContact(int id)
        {
            Contact contact = this._contactService.GetContact(id);

            
            if(contact == null) return NotFound();

            return Ok(contact);
        }

        [HttpPost]
        public IActionResult CreateContact([FromBody] Contact contact)
        {
            this._contactService.CreateContact(contact);
            return Ok(contact);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            bool isDeleted = this._contactService.DeleteContact(id);

            if (!isDeleted) return NotFound();

            return Ok();

        }

        [HttpPut("{id}")]
        public IActionResult UpdateContact(int id, [FromBody] Contact contact)
        {
            this._contactService.UpdateContact(contact);
            return Ok(contact);
        }
    }
}
