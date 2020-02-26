function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.signup.email();
return true;
}
else
{
alert("Invalid Email Address. Please try again.");
document.signup.email.focus();
return false;
}
}
