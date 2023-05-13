// buble

const arr = [3, 2, 4, 1, 6];
let sorted;
do {
  sorted = false;
  for (i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      let temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
      sorted = true;
    }
  }
} while (sorted);
console.log(arr);
// insert
const arr1 = [3, 2, 4, 1, 6, 5];

for (i = 1; i < arr1.length; i++) {
  const inserElement = arr1[i];
  let k = i - 1;
  while (arr1[k] > inserElement) {
    arr1[k + 1] = arr1[k];
    k--;
  }
  arr1[k + 1] = inserElement;
}

console.log(arr1);

// quick

function quick(arr) {
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quick(left), pivot, ...quick(right)];
}
console.log(quick(arr1));
// merge
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let sortedarr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedarr.push(left.shift());
    } else {
      sortedarr.push(right.shift());
    }
  }
  return [...sortedarr, ...left, ...right];
}
console.log(mergeSort(arr1));
// selection
let array4 = [2, 1, 3, 21, 4, 6];
function selection(arr) {
  let temp;
  for (let m = 0; m < arr.length - 1; m++) {
    let index = m;
    for (let n = m + 1; n < arr.length; n++) {
      if (arr[m] > arr[n]) {
        index = n;
      }
    }
    if(index !== m){
        [arr[m],arr[index]]  = [arr[index],arr[m]]
    }
  }
  return arr;
}
console.log(selection(array4));
