function greetName(name : string) : string{
    return "Hello ".concat(name);
}

function isEven(num : number) : string{
    if(num % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}

let i : number;
for (i = 1; i <= 10; i++){
    console.log(i + " is " + isEven(i));
}

const message: string = "Ashbin";

console.log(greetName(message));