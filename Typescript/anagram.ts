function isAnagram(s1 : string, s2 : string) : boolean{
    if (s1.length != s2.length){
        return false;
    }
    if(s1.split('').sort().join('') === s2.split('').sort().join('')){
        return true;
    }
    return false;
}

console.log(isAnagram("listen", "hello"));
console.log(isAnagram("listen", "silent"));