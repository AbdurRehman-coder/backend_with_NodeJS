// Task 2:
//  Create a custom object. Sort that object by its keys 
// and return the corresponding values of those sorted keys in an array.

// declare an object
myObj = {
    math : 45,
    programming : 88,
    essayWriting : 63,
    dataBase : 78,
    marketing : 67,
}

// getting obj keys
objKeys = Object.keys(myObj); 
// sorted the obj keys in ascending ordering
sortedKeys = objKeys.sort();  

var sortedValues = []; // empty list

sortedKeys.forEach( (value, index, array) =>{
    // go through the sortedKeys and getting the corresponding value 
    //of that key and store that value in the list
 sortedValues.push(myObj[value]);
}

);

console.log('myobject sorted keys: ', objKeys);
console.log('object sorted value: ', sortedValues);

