"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
// let foo = new Employee("Sathya", "P", 32);
// console.log(foo.getFullName());
console.log(Employee_1.MAGIC_NUMBER);
var obj = {
    firstName: "Sathya",
    lastName: "SN",
    age: 30
};
var foo1 = new Employee_1.Employee(obj);
console.log(foo1.getFullName());
