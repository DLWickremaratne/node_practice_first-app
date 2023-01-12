//path
//require function return object that is export from target module 
const EventEmitter = require('events');
const emitter = new EventEmitter();

//order is importnet 
//listner first because we call the emit metheod ,emitter iterase over all the listners


//rejister a listner
//listner is a function when that event is called
//two argument function and the event name 

// emitter.on('messageLogged', function(arg){
//     console.log('lisnener called', arg)
// });

//can use arrow function
emitter.on('messageLogged', (arg) => 
{
    console.log('lisnener called', arg)
});


//emit - making a noise, produce - signalling 

//raise a event
//send data about event
//url to log
//arg - name dosent matter- name of the event

emitter.emit('messageLogged', { id: 1, url: 'http//'});

