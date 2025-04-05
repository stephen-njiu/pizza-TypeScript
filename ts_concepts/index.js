"use strict";
console.log("Ts is running in the browser... ");
// CLASSES
// 1a long version
// class Student {
//     // these properties are  public by default 
//     firstName: string;
//     lastName: string;
//     age: number;
//     private courses: string[];
//     constructor (first: string, last: string, age: number, courses: string[]){
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.courses = courses
//     }
//     enroll(coursename: string){
//         this.courses.push(coursename)
//     }
//     listofCourses(){
//         return this.courses.slice();
//     }
// }
// Shorthand method
class Student {
    // these properties need to be explicitly defined whethere they are public or private
    constructor(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    enroll(coursename) {
        this.courses.push(coursename);
    }
    listofCourses() {
        return this.courses.slice();
    }
}
const student = new Student("Sakarina", "Lindens", 25, ["Typescript"]);
student.enroll("Angular");
console.log(student.listofCourses());
console.log(student.firstName, student.lastName, student.age);
let steve; // enforce steve as of interface Human
steve = {
    firstName: "Steve",
    age: 24,
    greet() {
        console.log("Interface Human in now Satisfied");
    }
};
// Interfaces stretching a class
class Leo {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    greet() {
        console.log(`Hi, I'm ${this.firstName}, and I am ${this.age} years old.`);
    }
}
const leo = new Leo("Sakarina", 24);
leo.greet();
// GENERICS IN TYPESCRIPT
function getFirstElement(array) {
    return array[0];
}
const numbers = [991, 2, 3];
console.log(getFirstElement(numbers));
const strings = ['This is a string1', 'This is second string'];
console.log(getFirstElement(strings));
const response = {
    data: {
        name: "Kyle",
        age: 28
    },
    isError: false
};
const responseBlog = {
    data: {
        title: "Kyle",
    },
    isError: false
};
// if not type is specified then my generic returns default status:number
const statusResponse = {
    data: {
        status: 200
    },
    isError: false
};
