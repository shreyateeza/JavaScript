// Function
function sum1(a, b) {
    var result = a + b;
    console.log('Output:: ')
    console.log(result)
}

const sum2 = function (a, b) {
    var result = a + b;
    console.log('Output:: ')
    console.log(result)
}

// ----------------------------------------

// Playing with DataTypes
var a = 'hello';
console.log(a);
a = 123;
console.log(a);
var a = true;
console.log(a);

let b = 'hi';
console.log(b);
b = 123;
console.log(b); 
let b = true;
console.log(b); 
// Uncaught SyntaxError: Identifier 'b' has already been declared
// Cannot redeclare block-scoped variable 'b'.ts(2451)
// RE-DECLARE with let is NOT-ALLOWED.


const c = 'hi';
console.log(c);
c = 123;
console.log(c)
// TypeError: Assignment to constant variable.
// RE-INITIALISATION with const is not possible.
const c = true; // ERROR

// Objects
const obj = {
    a: 1,
    b: 2
}
console.log(obj)
obj.a = 3
console.log(obj)

const PI = 3.14;
function calculateArea(radius) {
    return PI * radius * radius;
}
const ans = calculateArea(2);
console.log("Area: ", ans);

// ------------------------------------------------------

// Arrays
let arr = [ 1, 2, true, {}, { a: 1 }, [3, 4, 5], "hello", null, undefined, 2.34, ['hello', 'h1'] ];
console.log(arr.length)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr.push("scaler"); // push at end
console.log(arr);
arr.pop(); // remove element from end
arr.unshift('first'); // push elemnt in start
console.log(arr);
arr.shift(); // removed element from start
console.log(arr);

// ------------------------------------------------

// Filter
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = arr1.filter(function (elem) {
    return elem % 2 === 0
});

console.log("even nos with filter", result);

let output = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        output.push(arr1[i])
    }
}
console.log("even nos with for loop", output);

val12 = 2
console.log(val12)

function fun() {
    console.log('im fun')
}

fun()