// Task 1: 
// Write a function that takes an array of integers as 
// input and returns the the count of even numbers.

function countEven(arr ){
    let count=0
// arr.forEach(element => {

//     if(element%2==0){
// count++;
//     }
// });
for (let index = 0; index < arr.length; index++) {
    
    if(arr[index] %2 == 0){
        count++;
    }
    
}

console.log('count is ',count)
}

/// calling that function
countEven([2,6,9,,7,10,12, 96, 14,3,7])