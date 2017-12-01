function greet(name) {
    console.log(`hello ${name}`.toUpperCase());
}

greet('bill');

function createEmail(to, from, object, message) {
    console.log(`
       to: ${to}
       from: ${from}
       object: ${object}
       message: ${message}
    `)
}

createEmail('jhon@mail.ru', 'jane@mail.ru', 'hello', 'how are you doing?');

function add(x,y) {
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add('2','3');

let name = 'billbo';

console.log(upperName`Hello ${name}`);

function upperName (literals, value) {
    return literals[0] + value.toUpperCase();
}