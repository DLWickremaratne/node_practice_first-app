const EventEmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();


//register listner
logger.on('messageLogged', (arg) => 
{
    console.log('lisnener called', arg)
});


logger.log('hi dhanith')