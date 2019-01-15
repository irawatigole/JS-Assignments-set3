// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Test Case 

// 1. findEO(10) returns 'Even'

// 2. findEO(11) returns 'Odd'

function findEO(a){
    if (a % 2 == 0){
        return 'even';
    }else {
        return 'odd';
    }
}
 console.log(findEO(10));
 console.log(findEO(11));
