function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signup.email))
  {
    return (true)
  }
    alert("Invalid Email Address")
    return (false)
}
