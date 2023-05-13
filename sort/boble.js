const arr= [3,2,4,5,6]
    for(i=1;i<arr.length;i++){
        let insertElement = arr[i]
        let k = i-1
        while(k >= 0 && arr[k]> insertElement ){
                arr[k+1] =arr[k]
            k--
        }
        arr[k+1] = insertElement
    }
 
console.log(arr)