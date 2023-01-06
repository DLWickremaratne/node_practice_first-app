//load module
const logger= require('./logger_creatingmodule.js');

logger.log1('hi');
logger.name1('Dhanith Lakjaya');


//building path module
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//os module get details about current operating systems 
const operating = require('os');
let freeMemory = operating.freemem();
console.log(` Free memory:  ${freeMemory}`);