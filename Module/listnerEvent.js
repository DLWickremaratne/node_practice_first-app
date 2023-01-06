//path
//require function return object that is export from target module 
const EventEmitter = require('events');

const emitter = new EventEmitter();

//rejister a listner
//order is importnet 
//arg - name dosent matter
// emitter.on('messageLogged', function(arg){
//     console.log('lisnener called', arg)
// });

//can use arrow function
emitter.on('messageLogged', (arg) => 
{
    console.log('lisnener called', arg)
});

//raise a event
//send data about event
//url to log
emitter.emit('messageLogged', { id: 1, url: 'http//'});

