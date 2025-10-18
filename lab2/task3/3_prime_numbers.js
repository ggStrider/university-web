function logPrimeNumbersUpTo(target) {

    if(target < 3) return;

    for(let i = 1; i < target; i++) {

        if(isNumberPrime(i)) {
            
            console.log(i);
        }
    }
}

function isNumberPrime(target) {

    if(target < 1) return false;
    
    for(let i = 2; i <= target / 2; i++) {
        
        if(target % i == 0) return false;
    }

    return true;
}

logPrimeNumbersUpTo(10);