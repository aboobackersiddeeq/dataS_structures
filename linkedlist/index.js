//  quick
//  merge

function mergeSort(arr){
   if(arr.length < 2){
      return arr
   }
   let middle = Math.floor(arr.length/2)
   const left = arr.slice(0,middle)
   const right =arr.slice(middle)
   return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
   let sortedArr = []
   while(left.length && right.length){
      if(left[0] < right[0]){
         sortedArr.push(left.shift())
      }else{
         sortedArr.push(right.shift())

      }
   }
   return [...sortedArr,...left,...right]
}
console.log(mergeSort([3,4,2,6,1,7]));