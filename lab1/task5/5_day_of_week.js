let userInput = prompt("Day of week: ").toLowerCase();

switch(userInput)
{
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        alert("Work day");
        break;

    case "saturday":
    case "sunday":
        alert("Weekend");
        break;

    default:
        alert("wrong input!");
}