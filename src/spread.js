let staticlanguages = ["c", "c++", "java"];
let dynamiclanguages = ["javaScript", "PHP", "Ruby"];

let languages = [...staticlanguages, "c#", ...dynamiclanguages, "python"];

console.log(languages);

function add(a, b, c) {
    console.log(a + b + c);
}

let numbers = [1, 2, 3];

add(...numbers);