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