function delay(millieseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, millieseconds);
    });
}

console.log("waiting for 3 seconds");
await delay(3000);
console.log("done");
