// bubble sort

const arr = [2, 4, 21, 5, 7];
let sorted;
do {
  sorted = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      sorted = true;
    }
  }
} while (sorted);
console.log(arr);

// insertion sort

const arr1 = [2, 4, 21, 5, 7,1];
for (i = 1; i < arr1.length; i++) {
  const inserElement = arr1[i];
  let k = i - 1;
  while (arr1[k] > inserElement) {
    arr1[k + 1] = arr1[k];
    k--;
  }
  arr1[k+1]=inserElement;
}
console.log(arr1);

// quick sort 
const arr2 = [2,0, 4, 21, 5, 7,1];

function quick (arr){
    const pivot = arr[arr.length-1]
    const  left =[]
    const right = []
    if(arr.length < 2){
        return arr
    }
    for(i=0;i< arr.length-1; i++){
      if(arr[i]<= pivot)  {
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
    }
    return [...quick(left),pivot,...quick(right)]
}
console.log(quick(arr2));

// merge sort

function mergeSort(arr){
    const middle = Math.floor(arr.length/2)
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)
    if(arr.length < 2){
        return arr
    }
   return merge (mergeSort(left),mergeSort(right))
}

function merge(left,right){
       let sortedarr = []
    while(left.length && right.length){
        if(left[0]< right [0]){
            sortedarr.push(left.shift())
        }else{
            sortedarr.push(right.shift())

        }
    }

    return [...sortedarr,...left,...right]

}


const arr3 = [2, 4, 21, 5,2, 7,1,3];

console.log(mergeSort(arr3))

// selection sort 
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  console.log(selectionSort(arr3))