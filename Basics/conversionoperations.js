let score = null

console.log(typeof score)

let valueinnumber = Number(score)
console.log(typeof valueinnumber)
console.log(valueinnumber) 

// when we have any string value in it then it will change to number but in the result it will show us nan(not a number)
// 33 = 33
// "33abc", "undefined"= NaN
// true = 1
// false = 0 
// null = 0

let isloggedin = 1
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin)

// 1 = true 
// 0 = false
// "" = false 
// "hitesh" = true 

// --------operations---------

let value = 3
let negvalue = -value
console.log(negvalue)

let str1 = "hello"
let str2 = " levithan"
let str3 = str1 + str2 
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2") 

console.log(+true)
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2+2
console.table([num1, num2, num3])
