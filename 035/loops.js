let n = 1000000007;

let isPrime = true;

let i= 2;
while (i < n) {
    if (n % i == 0 ) {
        isPrime = false;
        console.log(i);
    }
    i++
}

console.log(n, isPrime);