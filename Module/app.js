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


//file system module , how to work with modules 
//read directory

const filesystem = require('fs');

const files = filesystem.readdirSync('./');
console.log(files);

//callback 
files.readdir('./', function(err,files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
})



