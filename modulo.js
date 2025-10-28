const os = require('os');

let tipo = os.type();
const momoria_livre = os.freemem()


console.log(`Tipo ${tipo}`);
console.log(`Tipo ${os.release()}`);
console.log(`Tipo ${momoria_livre}`);