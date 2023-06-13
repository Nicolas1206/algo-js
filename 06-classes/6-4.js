class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get name(){
        return this.firstname + " " + this.lastname;
    }
    set name(fullname){
        const [firstname, lastname] = fullname.split(" ");
        this.firstname = firstname;
        this.lastname = lastname
    }
}

let Nico = new Person("Nicolas","Mateo Uroz");
console.log(Nico.name);