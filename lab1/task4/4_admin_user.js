const ADMIN_USERNAME = "admin";

let inputUserName = prompt("Input your username:").toLowerCase();

if(inputUserName == ADMIN_USERNAME)
{
    alert("Hello, administrator!");
}
else
{
    alert("Access denied!");
}