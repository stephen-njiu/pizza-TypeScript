let myName: string = "Bob"
let numberofWheels: number = 4
let isStudent: boolean = false

// Custom types in ts

type food = string
let favoriteFood: food = 'cake'

type Address = {
    street: string,
    city: string,
    country:string,
}

type person = {
    name: string
    age: 42
    isStudent: boolean
    address?: Address // this makes sure that address is an optional property
}

let person: person = {
    name: "joe",
    age: 42,
    isStudent:true,
    // address: { 
    //     street: "kamukunji",
    //     city: "Nairobi",
    //     country:"Kenya"

    // }

}

let person1: person = {
    name: "joe",
    age: 42,
    isStudent:true,
    address: {
        street: "Naromoru",
        city: "Nakuru",
        country:"Kenya"
    }
}

function displayInfo(person:person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

// typing arrays in ts

let ages: number[] = [100, 101]
ages.push(33)// 33 must be a number 



// literals

let myName1 = "Bob" // we can change the value of this variable
const myName2 = "Bob" // not allowed to reassign this variable

// Unions

type UserRole = "guest" | "member" | "admin"
let userRole:UserRole = "guest"

// TS= Specific Types any...
let a1: any = 2
// a1.toLowerCase() // possible because of any .... DON'T USE ANY  


// UNKNOWN type

// GENERICS
const gameScores = [14, 2, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warn woolen mittens"]

const voters = [{name: "Alice",age:23},{name:"Bob",age:43}]

function getLastItem<T>(array: T[]) : T | undefined{
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))

