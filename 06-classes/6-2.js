class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHello(){
        console.log("hello, " + this.firstname + " " + this.lastname + "!");
    }
}

let nicolas = new Person("Nicolas", "Mateo Uroz");

console.log(nicolas.sayHello());