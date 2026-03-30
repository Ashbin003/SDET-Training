function isPrime(num : number) : string{
    if (num < 2){
        return " is not prime";
    }
    else if(num == 2){
        return " is prime";
    }
    else{
        for(var i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                return " is not prime";
            }
        }
    }
    return " is prime";
}

// let n : number = 24;

// let m : number = 13;

for (var i = 0; i <= 100; i++){
    console.log(i + isPrime(i));
}

// console.log(n + isPrime(n));
// console.log(m + isPrime(m));