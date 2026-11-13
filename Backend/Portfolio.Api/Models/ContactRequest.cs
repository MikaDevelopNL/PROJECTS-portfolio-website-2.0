using System.ComponentModel.DataAnnotations;

namespace Portfolio.Api.Models;

public class ContactRequest
{
    [Required]
    public required string Name { get; set; }
    [Required][EmailAddress]
    public required string Email { get; set; }
    [Required]
    public required string Subject { get; set; }
    [Required]
    public required string Message { get; set; }
}