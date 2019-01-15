// Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.
function squareSum(a){
    var sum=0;
    for(var i=0; i<a.length; i ++){
     sum=sum + Math.pow(a[i],2);  
    }
    return sum;

}
console.log(squareSum([1,2,2]));
console.log(squareSum([1,1,1]));
console.log(squareSum([3,3,3]));