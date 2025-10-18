const sum = (...args) => {
    let result = 0;

    for(let i = 0; i < args.length; i++) {
        result += args[i];
    }

    return result;
}

console.log(sum(0, 1, 2, 3));
console.log(sum(1, 1, 1, 1, 1, 1, 1, 1, 1, 1));