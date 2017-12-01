'use strict';

function greet(name) {
    console.log(('hello ' + name).toUpperCase());
}

greet('bill');

function createEmail(to, from, object, message) {
    console.log('\n       to: ' + to + '\n       from: ' + from + '\n       object: ' + object + '\n       message: ' + message + '\n    ');
}

createEmail('jhon@mail.ru', 'jane@mail.ru', 'hello', 'how are you doing?');