let n : number[] = [1, 2, 3, 4, 5, 6];

let newArray = n.map((value) => value * 2);

let oddArray = n.filter((value) => value % 2 != 0);

let sum = n.reduce((old, cur) => old + cur, 0);

console.log("Original Array: ", n);
console.log("New Array: ", newArray);
console.log("Odd Array: ", oddArray);
console.log("Sum = " + sum);