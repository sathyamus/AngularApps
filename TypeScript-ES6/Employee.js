"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    // constructor(firstName : string, lastName : string, age : number) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }
    function Employee(obj) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.age = obj.age;
    }
    Employee.prototype.getFullName = function () {
        return "Hello " + this.firstName + " " + this.lastName + "!!!";
    };
    return Employee;
}());
exports.Employee = Employee;
// primitive types + objects references like Object, Array, any and void
// both null, undefined are falsify values
// no constructor over loading
// classes are it's own type like other OOPS languages
// let foo = new Employee("Sathya", "P", 32);
// console.log(foo.getFullName());
exports.MAGIC_NUMBER = Math.random();
// console.log(MAGIC_NUMBER);
