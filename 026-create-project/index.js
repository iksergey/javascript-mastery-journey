const readlineSync = require('readline-sync');

// Wait for user's response.
let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
