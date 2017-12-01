"use strict";

var staticlanguages = ["c", "c++", "java"];
var dynamiclanguages = ["javaScript", "PHP", "Ruby"];

var languages = [].concat(staticlanguages, ["c#"], dynamiclanguages, ["python"]);

console.log(languages);

function add(a, b, c) {
    console.log(a + b + c);
}

var numbers = [1, 2, 3];