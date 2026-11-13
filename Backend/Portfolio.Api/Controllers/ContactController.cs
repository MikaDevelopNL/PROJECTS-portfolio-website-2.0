using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Models;
using Portfolio.Api.Services;
using System.Threading.Tasks;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ContactController : ControllerBase
{
    
    private readonly ContactService _contactService;
    
    [HttpPost]
    public async Task<IActionResult> Create(ContactRequest request)
    {
        await _contactService.SendContact(request);
        
        return Ok(request);
    }
    

    public ContactController(ContactService contactService)
    {
        
        _contactService = contactService;
    }
}