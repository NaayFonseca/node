const os = require('os');
const chalk = require ('chalk')
const {converterByteToMb }= require('./util/conversor.js')
let tipo = os.type();
const momoria_livre = os.freemem()

console.log(chalk.blue.bold);

console.log(`Tipo ${tipo}`);
console.log(`Tipo ${os.release()}`);
console.log(`Tipo ${momoria_livre}`);
console.log(`Tipo ${converterByteToMb(momoria_livre)}MB`);''