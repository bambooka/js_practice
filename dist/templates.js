'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('hello ' + name).toUpperCase());
}

greet('bill');

function createEmail(to, from, object, message) {
    console.log('\n       to: ' + to + '\n       from: ' + from + '\n       object: ' + object + '\n       message: ' + message + '\n    ');
}

createEmail('jhon@mail.ru', 'jane@mail.ru', 'hello', 'how are you doing?');

function add(x, y) {
    console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

add('2', '3');

var name = 'billbo';

console.log(upperName(_templateObject, name));

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}