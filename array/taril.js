const arr = [0,2,1,-6,6,-7,9,1,2,0,1]
let sum= 0;
let sum1= 0;
let sum2= 0;
let sum3= 0;
for(let k=0;k<arr.length;k++){
    sum += arr[k]
}
const avg = sum/3
console.log(avg);

for(let i=0;i<arr.length; i++){
    if(  (sum1 +arr[i]) <=avg && sum1 !=avg){
        sum1 += arr[i]
    }else if(  ( sum2 +arr[i])<= avg && sum2 !=avg){
        sum2 += arr[i]
    }else{
        sum3 += arr[i]
    }
}
if(sum1 == sum2){
    console.log(true);
}else{
    console.log(sum1,sum2,sum3);
    console.log(false);
}