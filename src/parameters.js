function greet (greeting = 'hi', name = 'bill') {
    console.log(`${greeting} ${name}`)
}

greet('hi','bill');
greet('hi');
greet(undefined, 'bill');
greet();



function sum(...values){
    console.log(values);
    
    let sum = 0;
    
    values.forEach(function(value){
        sum += value;           
    });
    console.log(sum);
}

function sum(...values){
    console.log(
       values.reduce(function(prevValue, currentValue) {
           return prevValue + currentValue;
       }));
}

sum(3, 4, 56, 7);