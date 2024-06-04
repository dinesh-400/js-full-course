// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNum = 123456789001245n


//Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Dinesh",
    age: "23",
}

const myfunction = function(){
    console.log("Hello World !");
}

console.log(typeof(bigNum));
console.log(typeof(outsideTemp));
console.log(typeof(myfunction));