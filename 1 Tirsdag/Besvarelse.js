var listOfNames = ["Lars", "Peter", "Bo", "Frederrik"];

function checkForA(string){
     if (string.includes("a")){
         return true
     }
     else {
         false
     }
}

function myFilter(array, callback){
    var namesWIthA = [];
    for (let i = 0; i < array.length; i++){
        var x = array[i];
        if (callback(x) == true){
        namesWIthA.push(array[i]);
    }
}
return namesWIthA
} 

let allNamesWithA = listOfNames.filter(checkForA);
let namesReversed = listOfNames.reverse();

console.log(checkForA("Bad"));
console.log("Assignment 1")
//console.log(listOfNames.filter)(x => x.toLowverCase().includes("a"));
console.log(allNamesWithA);
console.log(namesReversed);


// Assignment 2
var names2 = ["John", "Joe", "Dude", "badName"];
console.log(" New names: "+ names2.join(", "));
var myFilterNames = myFilter(names2, checkForA);
//function (x) {
 //return x.toLoweerCase().includes("a");
//});

function myMap(array, callback){
    var newArray = array;
    for(var i = 0; i < array.length; i++){
        let word = array[i];
        newArray.push(callback(word));
    }
return newArray;
}

var reversMap = myMap(names2, function( word){
    return word.split("").reverse().join("");
});

console.log("Assignment 2")
console.log(myFilterNames);
console.log(reversMap);
