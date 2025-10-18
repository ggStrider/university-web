class MyClass
{
    FirstName = "";
    LastName = "";

    constructor(firstName, lastName)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}

function printPropertiesOfMyClass(obj)
{
    if(!(obj instanceof MyClass))
    {
        throw new Error("Function can use only " + MyClass.name)
    }

    console.log(obj.FirstName);
    console.log(obj.LastName);
}

let myObject1 = new MyClass("1Name", "1LastName");
let myObject2 = new MyClass("2Name", "2LastName");
let myObject3 = new MyClass("3Name", "3LastName");

printPropertiesOfMyClass(myObject1);
printPropertiesOfMyClass(myObject2);
printPropertiesOfMyClass(myObject3);
