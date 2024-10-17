function* primeGenerator(limit) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }

    let num = 2;
    while (num <= limit) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

// Example usage:
const primeGen = primeGenerator(20);
for (let prime of primeGen) {
    console.log(prime);
}
