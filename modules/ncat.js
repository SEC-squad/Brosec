var sys = require('sys');
var exec = require('child_process').exec;
var log = require('cli-color');
var os = require('os');
var question = require('./questions.js')
var db = require('../db/db');
var log = require('cli-color');
var blue = log.blue
var black = log.blackBright


var currentOS = os.type()


exports.init = function(callback) {
    
    callback()

    var port = db.getConfig("LPORT")

    
    exec("netcat -lnp "+port+" -vv");
    

    console.log('\n'+black('[*]')+' A netcat listener is running on port %s (ctrl c to stop)', port)



}


