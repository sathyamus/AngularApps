import { Employee, MAGIC_NUMBER } from './Employee'
import { Person } from './Person'

// let foo = new Employee("Sathya", "P", 32);
// console.log(foo.getFullName());

console.log(MAGIC_NUMBER);

let obj : Person = {
    firstName : "Sathya",
    lastName : "SN",
    age: 30,
//     middleName: "P"

//   Type '{ firstName: string; lastName: string; age: number; middleName: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'middleName' does not exist in type 'Person'


}

let foo1 = new Employee(obj);
console.log(foo1.getFullName());