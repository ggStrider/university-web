class User
{
    Id = -1;
    Name = "";

    constructor(name, id)
    {
        this.Name = name;
        this.Id = id;
    }
}

function waitForSeconds(seconds) {
    
    return new Promise(resolve => {
        // 'seconds' is actually millieseconds
        // so * 1000, to convert into actual seconds
        setTimeout(resolve, seconds * 1000);
    });
}

const users = [new User("Mykola", 1), new User("Olena", 2), new User("Stepan", 3)];

async function fetchAllUsers() {

    if(users.length == 0) {
        throw "No users in data base!";
    }

    await waitForSeconds(3);
    return users;
}

async function main() {
    try {
        let allUsers = await fetchAllUsers();
        
        for(let i = 0; i < allUsers.length; i++) console.log(allUsers[i]);
    }
    catch(exception) {
        console.error("Exception: " + exception)
    }
    finally {
        console.log("Done!");
    }
}

main();