const PASSWORD_PERMISSION_A = "111";
const PASSWORD_PERMISSION_B = "222";

let input = prompt("input your permission password");
let alertMessage = "Permission level is ";

if(input == PASSWORD_PERMISSION_A)
{
    alertMessage += "A";
}
else if(input == PASSWORD_PERMISSION_B)
{
    alertMessage += "B";   
}
else
{
    alertMessage = "Access denied!";
}

alert(alertMessage);