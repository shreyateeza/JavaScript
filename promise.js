// Case 1
console.log("before", new Date())
setTimeout(() => {
    console.log("inside settimeout", new Date())
}, 2000);
console.log("after", new Date())

// Case 2
console.log('start')
setTimeout(() => {
    console.log("inside settimeout", new Date())
}, 0);
console.log('end')


// Promises
// Step1 :: Create a promise
const p = new Promise(function (resolve, reject) {
    if (1 > 3) {
        resolve('Maths is awesome...')
    } else {
        reject("I dont like maths...")
    }
})

p.then((val) => {
    console.log("in then block::", val);
    return val
})
.then((param) => console.log(param, "I WIN!!!!"))
.catch(e => console.log("CATCH ERROR:", e))
.finally(() => console.log("IM DONE"))

// Arrow Functions
function sum1(a, b) {
    return a + b;
}
console.log(sum1(1, 2))
const sum2 = (a, b) => {
    return a + b;
}
const sum3 = (a, b) => a + b;
console.log(sum1(1, 2))
console.log(sum2(1, 2))

// Promise Continued...
console.log("Start");
setTimeout(() => {
    console.log("settimeout calls")
}, 0);
const promise1 = Promise.resolve("promise calls.."); // 5sec to over...
promise1.then((value) => {
    console.log(value);
});
console.log("end");

console.log('start');
new Promise((resolve) => {
    console.log('promise created');
    resolve();
}).then(() => {
    console.log('promise resolved');
});
console.log('end');


// using async await 1
async function getData() {
    return "data";
}
const result = await getData()
console.log(result) // error. await can only be used insode async keyword
getData().then((res) => console.log(res)) // data

// using async await 2
function resolveAfter2Sec() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            // res("RESOLVED SUCCESSFULLY")
            reject("Something went wrong...")
        }, 2000)
    })
}

async function fetchData() {
    try {
        console.log("calling api...")
        const result = await resolveAfter2Sec(); // just like then block 
        console.log(result)
    } catch (e) {
        console.log("Catch block", e)
    }
}
fetchData()


async function func() {
    const res1 = await new Promise((res) => res("1"))
    const res2 = await new Promise((res) => res("2"))
    console.log(res1)
    console.log(res2)
}
func()

async function fetchApiData() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const resp = await data.json()

        return resp;
    } catch (err) {
        console.log("CATCH BLOCK", err)
    }
}

fetchApiData().then((res) => console.log(res.name))

// without aysnc await.
function fetchResult() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(data => data.json())
        .then(res => console.log(res.name))
        .catch(e => console.log(e))
}
fetchResult()


// practice
// [1,2,3,[4,5,[6,7,8]]] >>> [1,2,3,4,5,6,7,8]