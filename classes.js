class Person{
    constructor(name,age){
        this.name = name
        this.age = age
        console.log("constructor1")
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

class Employee extends Person{
    constructor(name,age,position){
        super(name,age)
        this.position = position
        console.log("constructor2")
    }

    greet2(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old and I'm a ${this.position}`)
    }
}

const employee1 = new Employee("Rakshit",22,"Software Developer")
employee1.greet2()


// const persons = new Person("Rakshit",22)
// persons.greet()