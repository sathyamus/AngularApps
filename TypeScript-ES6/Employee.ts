import { Person } from "./Person";

export class Employee {
    private firstName : string;
    private lastName : string;
    private age : number;
    //private available : boolean;
    // constructor(firstName : string, lastName : string, age : number) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }

    constructor(obj : Person) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.age = obj.age;
    }

    getFullName() : string {
        return "Hello "+ this.firstName + " " + this.lastName + "!!!";
    }
}

// primitive types + objects references like Object, Array, any and void
// both null, undefined are falsify values
// no constructor over loading
// classes are it's own type like other OOPS languages

// let foo = new Employee("Sathya", "P", 32);
// console.log(foo.getFullName());

export const MAGIC_NUMBER : number = Math.random() ;
// console.log(MAGIC_NUMBER);
