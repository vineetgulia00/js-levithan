// kis tarah se data ko memory m rakha jata h aur access kra jata h uske base pe data 2 types ka h

// primitive : 7 types == call by value
// string, number, boolean, null,undefined, symbol, bigint

const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null
let useremail

const id = Symbol('1234')
const anotherid = Symbol('1234')

console.log(id === anotherid);

const bignumber = 1123456789n
// last m n lga do toh voh big number hojata h


//Refrence (Non primitive)
//arrays, objects, functions

const heros = ["qqqwe", "asdf", "zxcv"]
let myObj = {
    name: "levithan",
    add: "nhpc"
} // {} iske andar jo bhi chej h voh object h 