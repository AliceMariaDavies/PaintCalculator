const prompt = require('prompt-sync')();

const height = prompt("Please input wall height. ").parseInt();
const width = prompt("Please input wall width. ").parseInt();
console.log(height*width);