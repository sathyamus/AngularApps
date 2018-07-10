// ES6+ features

// Destructuring : Objects & Arrays

var arr = ["Foo", "Bar", "Toto"];
var [arr1, arr2, arr3] = arr;
console.log(arr3); // Toto

var [arr1, , arr3] = arr;
console.log(arr3); // Toto

var [arr1, arr3] = arr;
console.log(arr3); // Bar

var myObject = {
    drawCircle : function(r) { console.log(Math.PI * r * r)},
    drawText : function(text) {console.log("Drawing "+ text)}
}

var {drawText} = myObject;
drawText("Simple Text");

var {drawText, drawCircle} = myObject;
drawText("Sample Text");
drawCircle(2);


// Template String syntax
// - multi line sting
// - include variables in string

var fname="Foo";
console.log(`Hello 


${fname}!!`);

// Block scope variable
// - let
// - const

function demo(arr) {
    if (arr.length > 2) {
        var load = "Loading !!!";
        console.log(flash); // undefined
    } else {
        var flash = "Flashing !!!";
    }
}

demo(["Foo", "Bar", "toto"]);

function demo1(arr) {
    if (arr.length > 2) {
        let load = "Loading !!!";
        // console.log(flash); // ReferenceError: flash is not defined
        // let restrict the scope to the respective block
    } else {
        let flash = "Flashing !!!";
    }
}

demo1(["Foo", "Bar", "toto"]);

// Rest & Spread Operator (...)

// Spread
let intArr = [3,4,5];
let newArr = [1,2,...intArr, 6,7]; // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(newArr);

// Rest
function demo2(...params) {
    console.log(params[1]);
}

demo2("Foo", "Bar", "Toto"); // Bar
demo2("Foo", "Bar"); // Bar
demo2("Foo"); // undefined

function demo3(xyz, ...params) {
    console.log(params[1]);
}

demo3("Foo", "Bar", "Toto"); // Toto
demo3("Foo", "Bar"); // undefined
demo3("Foo"); // undefined

// Arrow functions
let numbersArr = [2,3,4,5];
// ES5 syntax
let newNumbersArr = numbersArr.map(function (v) {
    return v*2;
});

console.log(numbersArr);
console.log(newNumbersArr);

// ES6 syntax
let newNumbersArr2 = numbersArr.map(v => v*2);
console.log(numbersArr);
console.log(newNumbersArr2);


function mystery() {
    chooseNumber = function() {
        return 7;
    }
    return chooseNumber();

    chooseNumber = function() {
        return 12;
    }
}

console.log(mystery()); // 7