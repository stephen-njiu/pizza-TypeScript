console.log("Typescript Classes Simplified")
// BASIC CLASS

class Coder {
    constructor (public readonly name:string, public music: string, private age: number, protected lang: string) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang // lang can be accessed inside of both the class and the derived class
    }

    public getAge() {
        return `Hello, I'm ${this.age}`
    }
}

// const user = new Coder("Steve","Make the world a better place",24, "English")
// console.log(user.name, user.music)
// console.log(user.getAge())


class WebDev extends Coder {
    constructor(public computer: string, name: string, music: string, age:number, lang:string){
        super(name, music, age, lang)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}


const Sara = new WebDev("Mac", "Sara", "Lofi", 25, "Portugeese")
console.log(Sara.getLang())

//////////////////////////////////////////////////////////
// INTERFACES

interface Musician {
    name: string, 
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name
        this.instrument = instrument
    }
    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy','guitar')
console.log(Page.play("Strums"))

class Peeps {
    static count: number = 0 // we will be keeping static inside the class

    static getCount(): number {
        return Peeps.count
    }
    public id: number
    constructor(public name: string){
        this.name = name 
        this.id = ++Peeps.count // increments first before reassigning to variable id
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Naomi = new Peeps('Naomi')

console.log(John.id, Steve.id, Naomi.id) // retuns 1,2,3
console.log(Peeps.count) // should return the final value == 3


class Bands {
    private datastate: string[]
    constructor (){
        this.datastate = []
    }
    // getters
    public get data(): string[] {
        return this.datastate
    }
    // setters
    public set data(value: string[]){
        if (Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.datastate = value 
            return
        } else {throw new Error('Param is not an array of strings')}
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young','Sakarina Lindens']// set
console.log(MyBands.data) // get
MyBands.data = [...MyBands.data, "ZZ Top", "Leonardo Dicaprio"] // adds data to the already existing data
console.log(MyBands.data)
MyBands.data = ['Van Kamluk', 'Ziglar Tiger'] // resets the data
console.log('final log', MyBands.data)