
//module for logging msg

//remote logging service
var url = 'http://mylogger.io/log';

function log(message){
    //send an http request 
    console.log(message);
}

function name(firstName){
    console.log(firstName);
}

//variable and function are private , scope to this function not visible from outside 
//so export to outside 

//adding a method call log
module.exports.log1 = log;
module.exports.name1 = name;

