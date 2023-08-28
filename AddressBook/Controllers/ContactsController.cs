using AddressBook.Models;
using AddressBook.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace AddressBook.Controllers
{
    [EnableCors("AllowAnyOrigin")]
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private ContactServices _services;
        public ContactsController(ContactServices services)
        {
            this._services = services;
        }

        [HttpGet("cards")]
        public IActionResult GetCards()
        {
            return Ok(this._services.GetCards());
        }

        [HttpGet("{id}")]
        public IActionResult GetContact(int id)
        {
            Contact contact = this._services.GetContact(id);

            
            if(contact == null) return NotFound();

            return Ok(contact);
        }

        [HttpPost]
        public IActionResult CreateContact([FromBody] Contact contact)
        {
            this._services.CreateContact(contact);
            return Ok(contact);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteContact(int id)
        {
            bool isDeleted = this._services.DeleteContact(id);

            if (!isDeleted) return NotFound();

            return Ok();

        }




        [HttpPut("{id}")]
        public IActionResult UpdateContact(int id, [FromBody] Contact contact)
        {
            this._services.UpdateContact(contact);
            return Ok(contact);
        }





    }
}
