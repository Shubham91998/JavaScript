// premitive or non premitive


//1. premitive datatype => 
// 7 tyoes : String, Number, Boolean, null, undefined, Symbol, BigInt

const num = 100
const Score = 100.3
const IsLoggedIn = false
const Temprature = null  // empty not zero
let userEmail; // undefined

const id = Symbol('123')
const anotherid = Symbol('123')

/* console.log([id, anotherid])
console.log(id===anotherid) */

//const BigNumber = 1132445548787874456456456114465n // use bigint to define



//2. non - premitive datatype or Refrence dataType => 

// Array, Objects, Functions

const heros = ["saktiman", "nagraj", "doga"];
let myobj = {
    name:"shubham", 
    age:22
}

const myFunc = function(){
    console.log("Hello World")
}

console.log(typeof anotherid)