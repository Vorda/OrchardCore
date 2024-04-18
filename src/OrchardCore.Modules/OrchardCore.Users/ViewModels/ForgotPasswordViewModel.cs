using System;
using System.ComponentModel.DataAnnotations;

namespace OrchardCore.Users.ViewModels
{
    public class ForgotPasswordViewModel
    {
        [Obsolete("Email property is no longer used and will be removed in future releases. Instead use Identifier.")]
        [Email.EmailAddress(ErrorMessage = "Invalid Email.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Username or email address is required.")]
        public string Identifier { get; set; }
    }
}
