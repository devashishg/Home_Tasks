const EventEmitter = require('events')

class Logger extends EventEmitter{
     
    constructor(){
        super();
        this.log();
        this.on('newEvent',()=>{
            console.log('newEvent3')
        })
    }
    
    log(){
        console.log('newEvent1');
        this.emit('newEvent');
    }
    
    
}


module.exports = Logger;