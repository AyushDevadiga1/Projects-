//                                                      event module

// required modules
const events = require('events');
const { EventEmitter } = require('stream');

// Create a Class
class MyEmitter extends EventEmitter {}

//Init Object 
const myEmitter = new MyEmitter();

// EventListener
myEmitter.on('event',()=>{
    console.log('Event Fired !')
});

//Init Emitter
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');