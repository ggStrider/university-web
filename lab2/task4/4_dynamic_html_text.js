class Person {

    LastName = "";
    Name = "";
    MiddleName = "";

    Sessions = 0;

    constructor(lastName, name, middleName, sessions) {
        
        this.LastName = lastName;
        this.Name = name;
        this.MiddleName = middleName;

        this.Sessions = sessions;
    }

    // typeFullInformationInConsole() {
    //     console.log(this.getFullInformation());
    // }

    getFullInformation() {
        let result = this.LastName + " " + this.Name + " " + this.MiddleName + " - " 
            + this.Sessions;

        return result;
    }
}

function addPersonsInHtml(source) {
    
    const parentList = document.getElementById("personList");

    for (let i = 0; i < source.length; i++) {

        const person = document.createElement("li");
        person.textContent = source[i].getFullInformation();

        parentList.appendChild(person);
    }
}

// my additional external function
function createPersonsByUserInputs() {

    let person = new Person();
    person.LastName = prompt("last name: ")
    person.Name = prompt("name: ")
    person.MiddleName = prompt("middle name: ")
    person.Sessions = 0;

    return person;
}

// for my tests
let persons = [];
for(let i = 1; i <= 3; i++) {
    
    // let newPerson = createPersonsByUserInputs();
    let newPerson = new Person(`LastName ${i}`, `Name ${i}`, `MiddleName ${i}`, i);
    persons[i - 1] = newPerson;
}

addPersonsInHtml(persons);
