const fs = require('fs')

fs.readFile('file.txt' , 'utf-8', (err, data) => {
  console.log('err: ' , err , ' data: ', data);
});

const sync = fs.readFileSync('file.txt')
console.log('sync: ', sync.toString());

console.log('After the file reading')

fs.writeFile('file.txt', 'Digital Content Creator', (data )  =>{
 
});