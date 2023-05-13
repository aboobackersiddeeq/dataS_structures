function mergesort (arr){
    if(arr.length <2){
        return arr
    }
    const middle = Math.floor(arr.length/2)
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)
    return merge (mergesort(left),mergesort(right))
}

function merge(left,right){
  let sortedarr = []
  while (left.length && right.length){
    if(left[0] <= right[0]){
        sortedarr.push(left.shift())
    }else{
        sortedarr.push(right.shift())
    }
  }
  return [...sortedarr,...left,...right]
}

console.log(mergesort([3,2,1,4,5,3]))