const ADMIN_USERNAME = "ADMIN";

let inputUserName = prompt("Input your username:");

if(inputUserName == ADMIN_USERNAME)
{
    alert("Hello, administrator!");
}
else
{
    alert("Access denied!");
}