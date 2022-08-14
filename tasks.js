
// Task 1:

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

countEven([2,6,9,,7,10,12,14,3,7])