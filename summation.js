// Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

function summation(a){
    sum = 0;
    for (var i=1; i<=a; i++){
     sum=sum + i;
     
    }
    return sum;
}
console.log(summation(8));
console.log(summation(1));
console.log(summation(2));