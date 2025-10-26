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

function getUserByID(id) {

    return new Promise(async (resolve, reject) => {

        for(let i = 0; i < users.length; i++) {
      
            if(users[i].Id == id) {

                await waitForSeconds(5);
                resolve(users[i]);
            }
        }

        reject("User not found");
    });
}

async function thenCatchVariant() {

    await getUserByID(1)
        .then(user => {
            console.log(user);
        })
        .catch(exception => {
            console.log(exception);
        })
        .finally(() => console.log("Done!\n"));

    
    await getUserByID(10)
        .then(user => {
            console.log(user);
        })
        .catch(exception => {
            console.log(exception);
        })
        .finally(() => console.log("Done!\n\n\n"));
}

async function tryCatchVariant() {

    try {
        let user = await getUserByID(2);
        console.log("User found:", user);
    } catch (exception) {
        console.error("Error:", exception);
    } finally {
        console.log("Done!\n");
    }

    try {
        let user = await getUserByID(99);
        console.log("User found:", user);
    } catch (exception) {
        console.error("Error:", exception);
    } finally {
        console.log("Done!");
    }
}

thenCatchVariant();
tryCatchVariant();
