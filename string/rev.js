
// let str ='Halooo'
//  let reverseStr ='';
// for(i=str.length-1; i>=0 ; i--){
//  reverseStr +=str[i]
// }
// console.log(reverseStr);
// console.log(str.split('').reverse().join(''));

// function replaceAlphabet(string, n) {
//     let newString = '';
//     if(n > 26){
//         n= n%26
//     }
//     for (let i = 0; i < string.length; i++) {
        
//         let code = string.charCodeAt(i);
//         let newCode = code + n;
//         if(newCode >= 122){
//             newCode -=26
//         }
//         console.log(newCode);
//         let newChar = String.fromCharCode(newCode);
//         newString += newChar;
//     }
    
//     return newString;
//   }
//   console.log(replaceAlphabet("abcdz",30))
 

//   function romanToInt(s) {
//     const romanValues = {
//       'I': 1,
//       'V': 5,
//       'X': 10,
//       'L': 50,
//       'C': 100,
//       'D': 500,
//       'M': 1000
//     };
    
//     let result = 0;
//     let previousValue = 0;
    
//     for (let i = s.length - 1; i >= 0; i--) {
//       const currentValue = romanValues[s[i]];
//       if (currentValue < previousValue) {
//         result -= currentValue;
//       } else {
//         result += currentValue;
//       }
//       previousValue = currentValue;
//     }
    
//     return result;
//   }
  
//   // example usage
//   console.log(romanToInt('III')); // prints 3
//   console.log(romanToInt('IV')); // prints 4
//   console.log(romanToInt('IX')); // prints 9
//   console.log(romanToInt('LVIII')); // prints 58
//   console.log(romanToInt('MCMXCIV')); // prints 1994

var romanToInt = function (s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let prev = 0;
    let sum = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let curr = romanValues[s[i]]

        if (curr < prev) {
            sum -= curr
        } else {
            sum += curr
        }
        prev = curr
    }
    return sum
};
console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))