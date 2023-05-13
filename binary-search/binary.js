
// function binarySearch (arr,value){
//  let left = 0;
//  let right = arr.length-1
//  while(left != right){
//      let middle = Math.floor((left+ right)/2)
//      if(arr[middle] == value){
//         return middle
//      } 
//      if( value < arr[middle]){
//         right = middle-1
//      }else{
//         left =middle +1
//      }
//  }
//   return -1
// }




function req(arr,value) {
    return search(arr,value,0,arr.length-1)
    function search(arr,value,left,right){
        let middle = Math.floor((left+right)/2)
        if(arr[middle]== value){
            return middle
        }
        if(left == right){
            return -1;
        }
        if(value < arr[middle]){
            return search (arr,value, left,middle-1)
        }else{
            return search (arr,value, middle+1,right)

        }
    }
}
console.log(req([0,1,2,3,4,5],2));
console.log(req([0,1,2,3,4,5],6));


function binarySearch(arr,value){
    let left =0
    let right = arr.length-1
    
    while(left <= right){
        let middle = Math.floor((left+right)/2)
        if(arr[middle] == value){
            return middle
        }
        if(value < arr[middle]){
            right = middle-1
        }else{
            left = middle+1
        }
    }
    return -1
}

function reqetion(arr,value){
    return search (arr,value, 0, arr.length-1)
    function search(arr,value,left,right){
        const mid = Math.floor((left+right)/2)
        if(value == arr[mid]){
            return mid
        }
        if(left == right){
            return -1
        }
        if(value < arr[mid]){
          return search (arr,value, left, mid-1)
        }else{
           return search (arr,value, mid+1, right)

        }
    }
}

console.log(binarySearch([1,2,3,4,5],4));
console.log(reqetion([1,2,3,4,5],49));



