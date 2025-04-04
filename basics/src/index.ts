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