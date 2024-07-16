const { add, multi, sub } = require("./test");
const { add, multi } = require("./test");
const { printHello, printBye, printHAHA } = require("./test2");


console.log(add(1,2));

console.log(sub(1,5));

console.log(multi(4,3));
printHello();

printBye();

printHAHA();

printBye();

printHello();