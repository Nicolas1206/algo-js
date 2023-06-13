class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Dog extends Animal {
    static greeting = "Yo";
    constructor(name){
        super();
        this.name = name;
    }
}

class Cat extends Animal {
    static greeting = "Salut";
    constructor(name){
        super();
        this.name = name;
    }
}

let bob = new Dog("Bob");
let felix = new Cat("Felix");

console.log(bob.sayHello());
console.log(felix.sayHello());