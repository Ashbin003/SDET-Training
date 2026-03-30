function isOnTime(time: string): string {
    let temp = time.split(":");
    let hour: number = Number(temp[0]);
    let minutes: number = Number(temp[1]);

    let total = hour * 60 + minutes;
    let examTime = 9 * 60 + 30;

    if (total === examTime) {
        return "ON-TIME";
    } else if (total < examTime) {
        return "EARLY";
    } else {
        return "LATE";
    }
}

const prompt = require('prompt-sync')();

let time: string = prompt("Enter time (HH:MM): ");
console.log(isOnTime(time));