// Case 1
var a = 1;
console.log(a); // 1
console.log(b); // undefined
var b = 2;
console.log(c); // Reference error
let c = 3;

// ------------------------------------

// Case 2
function one() {
    two()
}

function two() {
    three()
}

function three() {
    console.log('HI')
}

one()

// ------------------------------------------------

// Case 3
function greet() {
    console.log(msg)
}
var msg = "Hello World"
greet()

function greet() {
    sayHNW()
    function sayHNW() {
        console.log(msg)
    }
}
var msg = "Happy New Year"
greet()

function greet() {
    var msg = "Happy New Year";
    sayHNW();
    function sayHNW() {
        console.log("inner", msg);
    }
}
greet();
console.log("outer", msg)

// ---------------------------------

// Case 4
function parent() {
    let a = 'kanishk'
    function child() {
        console.log(a);
        function child2() {
            const a = 10;
            console.log(a)
        }
        child2()
    }
    child();
}
parent()

// --------------------------------

// Case 5
function fun() {
    var x = 100
    const a = 2; // block starts from 73 
    const b = 2; // block starts from 73 
    if (a === b) {
        let c = 3; // block starts from 76 till 79. 
        console.log(c)
    }
    // console.log(c, 'true...'); // ReferenceError: c is not defined
    console.log(a)
    console.log(b)
    {
        let d = 10; // line 85-87 only.
    }
    console.log(d)
}
fun()
console.log(x); // ReferenceError: x is not defined
