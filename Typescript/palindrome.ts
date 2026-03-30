function isPalindrome(num : number) : string{
    let temp : number = num;
    let rev : number = 0;
    while(temp > 0){
        let d : number = temp % 10;
        rev = rev * 10 + d;
        temp = Math.floor(temp/10);
    }
    if (rev == num){
        return " is palindrome";
    }
    else{
        return " is not palindrome";
    }
}

function isPalindromeJoin(num: number): boolean {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}

let n : number = 232;

let m : number = 246;

console.log(m + isPalindrome(m));
console.log(n + (isPalindromeJoin(n) ? " is palindrome" : " is not palindrome"));