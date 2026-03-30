function printDetails(firstName: string, lastName: string): string;
function printDetails(time: number, distance: number): number;

function printDetails(arg1: any, arg2: any): any{
    if(typeof arg1 === "string" && typeof arg2 === "string"){
        console.log("Full Name: " + arg1, arg2);
    }
    if(typeof arg2 === "number" && typeof arg2 === "number"){
        console.log("It takes " + arg1 + " minutes to travel " + arg2 + " kms");
    }
}

printDetails("Jane", "Doe");
printDetails(60, 60);