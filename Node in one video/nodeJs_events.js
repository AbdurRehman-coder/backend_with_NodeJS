
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}
    
   const myEmitter = new MyEmitter(); 
     
     myEmitter.on('waterFull', () =>{
       console.log('please turn off the moter!');
       setTimeout(() => {
        console.log('Please turn off the moter, it is gentle request');
       }, 3000)
     });

    
     console.log('Code is running')
     myEmitter.emit('waterFull');
     console.log('code is still running...')
     