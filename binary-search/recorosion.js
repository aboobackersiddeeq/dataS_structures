// function binary(arr,target){
// return search(arr,target,0,arr.length-1)
//    function search(arr, target,left,right) {
//     let midle= (left +right )/2;
//     if(target ==arr[midle])
//      return midle
//      if(left == right){
//          return -1
//         }
//         if(target< midle){
//             return search(arr,target,left,midle-1)
//         }else{
//             return search(arr,target,midle+1,right)
//         }
//     }
// }
// console.log(binary([1,2,3,4,5,6,8],6));

// function f(n){
//     if(n<2){
//     return n
//     }
//     return f(n-1)+f(n-2)
// }
// console.log(f(5-1));

// function f(n){
//     if(n<1){
//     return 1
//     }
//     return n * f(n-1)
// }
// console.log(f(4));

// lenear search
function len(target){
const arr= [1,2,3,4,5] ;
for(let i=0; i<arr.length ;i++){
    if(arr[i] == target){
        return i
    }
}
return null;
}
console.log(len(10));
// binary search

function bin(target){
const arr= [1,2,3,4,5,6] ;
let left =0;
let right = arr.length-1;

 while(left<=right){
    let middle =Math.floor((left +right )/2)
    if (target == arr[middle]){
        return middle;
    }
    if (target < arr[middle]){
        right =middle-1
    }else{
        left = middle+1
    }
 }
return null;
}
console.log(bin(4));

function binaryR(arr, target) {
  return search(arr, target, 0, arr.length - 1);
  function search(arr, target, left, right) {
    let middle = Math.floor((left + right) / 2);
    if (target === arr[middle]) {
      return middle;
    }
    if (left == right) {
      return null;
    } else if (target < arr[middle]) {
      return search(arr, target, left, right - 1);
    } else {
      return search(arr, target, left + 1, right);
    }
  }
}

console.log(binaryR([1,2,3,4,5,6,7],5));
