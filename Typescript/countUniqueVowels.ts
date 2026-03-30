function countUniqueVowels(str: string): number{
    let seen = new Set<string>();
    let duplicates = new Set<string>();
    let vowels: string = "aeiouAEIOU"
    for(var i = 0; i < str.length; i++){
        let ch : string = str.charAt(i);
        if(vowels.indexOf(ch) !== -1){
            if(seen.has(ch)){
                duplicates.add(ch);
            }
            else{
                seen.add(ch);
            }
        }
    }
    
    let result: number = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if(vowels.indexOf(ch) !== -1){
            if (!duplicates.has(ch)) {
                result++;
            }
        }
    }

    return result;

}

console.log(countUniqueVowels("correspondence"));