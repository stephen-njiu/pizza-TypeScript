"use strict";
console.log("Typescript Classes Simplified");
// BASIC CLASS
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang; // lang can be accessed inside of both the class and the derived class
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
// const user = new Coder("Steve","Make the world a better place",24, "English")
// console.log(user.name, user.music)
// console.log(user.getAge())
class WebDev extends Coder {
    constructor(computer, name, music, age, lang) {
        super(name, music, age, lang);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25, "Portugeese");
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play("Strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // increments first before reassigning to variable id
    }
}
Peeps.count = 0; // we will be keeping static inside the class
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Naomi = new Peeps('Naomi');
console.log(John.id, Steve.id, Naomi.id); // retuns 1,2,3
console.log(Peeps.count); // should return the final value == 3
class Bands {
    constructor() {
        this.datastate = [];
    }
    // getters
    get data() {
        return this.datastate;
    }
    // setters
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.datastate = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Sakarina Lindens']; // set
console.log(MyBands.data); // get
MyBands.data = [...MyBands.data, "ZZ Top", "Leonardo Dicaprio"]; // adds data to the already existing data
console.log(MyBands.data);
MyBands.data = ['Van Kamluk', 'Ziglar Tiger']; // resets the data
console.log('final log', MyBands.data);
