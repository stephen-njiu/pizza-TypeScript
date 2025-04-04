"use strict";
let myName = "Bob";
let numberofWheels = 4;
let isStudent = false;
let favoriteFood = 'cake';
let person = {
    name: "joe",
    age: 42,
    isStudent: true,
    // address: { 
    //     street: "kamukunji",
    //     city: "Nairobi",
    //     country:"Kenya"
    // }
};
let person1 = {
    name: "joe",
    age: 42,
    isStudent: true,
    address: {
        street: "Naromoru",
        city: "Nakuru",
        country: "Kenya"
    }
};
function displayInfo(person) {
    var _a;
    console.log(`${person.name} lives at ${(_a = person.address) === null || _a === void 0 ? void 0 : _a.street}`);
}
// typing arrays in ts
let ages = [100, 101];
ages.push(33); // 33 must be a number 
// literals
let myName1 = "Bob"; // we can change the value of this variable
const myName2 = "Bob"; // not allowed to reassign this variable
let userRole = "guest";
// TS= Specific Types any...
let a1 = 2;
// a1.toLowerCase() // possible because of any .... DON'T USE ANY  
// UNKNOWN type
// GENERICS
const gameScores = [14, 2, 33, 42, 59];
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warn woolen mittens"];
const voters = [{ name: "Alice", age: 23 }, { name: "Bob", age: 43 }];
function getLastItem(array) {
    return array[array.length - 1];
}
console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
