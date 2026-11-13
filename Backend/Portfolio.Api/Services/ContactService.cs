using Portfolio.Api.Models;
using Resend;
using System.Threading.Tasks;

namespace Portfolio.Api.Services;

public class ContactService
{
    private readonly IResend _resend;

    public ContactService(IResend resend)
    {
        _resend = resend;
    }
    public async Task SendContact(ContactRequest request)
    {
        var message = new EmailMessage();
        message.ReplyTo = new EmailAddressList();
        
        message.From = "Portfolio Contact <onboarding@resend.dev>";
        message.To.Add("mikadeveloper@hotmail.com");
        message.Subject = "Nieuw contactbericht via Portfolio";
        message.TextBody = $@"
                            Nieuw contactbericht via Portfolio

                            Er is een nieuw bericht ontvangen via het contactformulier.

                            Afzender: {request.Name}
                            E-mailadres: {request.Email}
                            Onderwerp: {request.Subject}

                            Bericht:
                            {request.Message}

                            ---
                            Automatisch verzonden via het contactformulier van Portfolio.
                            ";
        message.ReplyTo.Add(request.Email);
        
        
        await _resend.EmailSendAsync(message);
    }
}