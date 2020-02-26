function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Welcome to our Newsletter!");
document.signup.email.focus();
return true;
}
else
{
alert("Invalid Email Address. Please try again.");
document.signup.email.focus();
return false;
}
}
