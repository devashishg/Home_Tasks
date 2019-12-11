let EventEmitter = require('events');
let emitter = new EventEmitter();


emitter.on('NEW',(obj)=>{
    console.log('hello',obj.id);
})

emitter.emit('NEW',{ 'id' : 123 });

//==========================================



let Logger = require('./index');

let logg = new Logger();

logg.on('newEvent',()=>{
    console.log('newEvent2');
})
logg.log();
