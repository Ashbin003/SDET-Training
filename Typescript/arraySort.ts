function arraySort(arr: number[]): number[]{
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - i - 1; j++){
            if(arr[j]! > arr[j + 1]!){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(arraySort([8, 2, 5, 1, 4, 9, 7, 6, 3]));