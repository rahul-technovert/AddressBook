using AddressBook.Contexts;
using AddressBook.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace AddressBook.Controllers
{
    [EnableCors("AllowAnyOrigin")]
    [Route("api/contacts")]
    public class ContactsController : Controller
    {
        private AddressBookContext context;
        public ContactsController(AddressBookContext addressContext)
        {
            
            context = addressContext;
        }

        [HttpGet]
        public IEnumerable<Contact> GetContacts()
        {
      
            return context.Contacts.ToList();
        }

        [HttpPost]
        public async Task<IActionResult> CreateContact([FromBody] Contact contact)
        {
        

            context.Contacts.Add(contact);
            await context.SaveChangesAsync();

            return Ok(contact);
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateContact(int id, [FromBody] Contact contact)
        {

            Contact dbContact = await context.Contacts.FindAsync(id);

            if (dbContact == null)
                return NotFound();
            
            MapContact(contact, dbContact);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact(int id)
        {
            Contact contact = await context.Contacts.FindAsync(id);

            if (contact == null)
                return NotFound();
            
            context.Remove(contact);
            await context.SaveChangesAsync();
            return Ok(id);

        }

        private void MapContact(Contact updatedContact, Contact dbContact)
        {
            dbContact.Email = updatedContact.Email;
            dbContact.Address  = updatedContact.Address;
            dbContact.Landline = updatedContact.Landline;
            dbContact.Website = updatedContact.Website;   
            dbContact.Mobile = updatedContact.Mobile; 
            dbContact.Name = updatedContact.Name;

        }



    }
}
