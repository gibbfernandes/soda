$(document).ready(function()
{
	
	// Contact Form JS
	// Setup form validation on the #register-form element
    $("#main-contact-form").validate({

        // Specify the validation rules
        rules: 
		{
            fullname: 
			{
            	required: true,
            	minlength: 2,
            	maxlength: 50,
            },
            email: 
			{
                required: true,
                email: true
            },
            message: 
			{
                required: true,
            },
            
            /*agree: "required"*/
		},
		
	
        
        // Specify the validation error messages
        messages: 
		{
            fullname:
			{
            	required: "Please enter your name",
            	minlength: "Minimum 2 characters long",
            	maxlength: "Maximum 50 characters long",
            } ,
            email: "Please enter a valid email address",
            message: "Please enter the message",
            /*agree: "Please accept our policy"*/
     },
		submitHandler: function(form) 
		{
			form.submit();
		}
	
    });
	
	
});