function progression(source, addCount) {
    let result = [source];

    for (let i = 1; i < addCount; i++) {
        result[i] = result[i - 1] + source;
    }

    return result;
}

console.log(progression(7, 3));
console.log(progression(7, 2));
console.log(progression(7, 0));
console.log(progression(7, -5));
