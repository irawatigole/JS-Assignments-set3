// Given an array of one's and zero's convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

function binaryToNumber(a){
    
   sum= (a[0]* (Math.pow(2,3))) +  (a[1]* (Math.pow(2,2)))+ (a[2]* (Math.pow(2,1))) + (a[3]* (Math.pow(2,0)));
   return sum;
    }
  

console.log(binaryToNumber([0,0,0,1])); //1
console.log(binaryToNumber([0,0,1,0])); //2
console.log(binaryToNumber([0,1,0,1])); //5
console.log(binaryToNumber([1,0,0,1]));//9
console.log(binaryToNumber([0,0,1,0]));//2
console.log(binaryToNumber([0,1,1,0]));//6
console.log(binaryToNumber([1,1,1,1]));//15
console.log(binaryToNumber([1,0,1,1]));//11

