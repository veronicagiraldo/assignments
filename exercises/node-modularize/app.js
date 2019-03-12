// const greet = require("./index");
// greet(); 
const greet1 = require("./greet1");
greet1();

const greet = require('./greet1');
greet();

var greet2 = require("./greet2");
greet2.greet();

var greet3 = require("./greet3");
greet3.greet();


var Greet4 = require('./greet4');
var greetr = new Greet4();
greetr.greet();