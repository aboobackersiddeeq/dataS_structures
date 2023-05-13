
const arr = [4,3,1,4,5]
for(let i=1;i<arr.length; i++){
    const insertElement = arr[i];
    let k = i-1
    while(k>=0 && arr[k]> insertElement){
        arr[k+1]=arr[k]
        k--
    }
    arr[k+1] = insertElement
}
console.log(arr)

// boble sort 

const arr1 =[2,1,3,4,3]
let sorted;
do{
    sorted = false
for(let l=0;l<arr1.length-1;l++){
    if(arr1[l]>arr1[l+1]){
       temp = arr1[l]
        arr1[l] =arr1[l+1]
        arr1[l+1] = temp
        sorted = true
    }
}
}while(sorted)
console.log(arr1);