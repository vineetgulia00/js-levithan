const name = "vineet"
const age = 22

console.log(`hello my name is ${name} and my age is ${age}`)

const gamename = new String('levithan')
// other method to made string

console.log(gamename[0])// shows item at this index
console.log(gamename.__proto__)// shows prototype

console.log(gamename.length) //shows length of string
console.log(gamename.toUpperCase()) //to make everything in big letters

console.log(gamename.charAt(2))
console.log(gamename.indexOf('t'))

const newstring = gamename.substring(0 ,9)
// in substrings we cant give negative values.
console.log(newstring)

const anotherstring = gamename.slice(-5 ,5)
console.log(anotherstring)

const newstring1 = "      mudit    "
console.log(newstring1)
console.log(newstring1.trim())

const url = "https://levithan.tech/levithan%20tech"

console.log(url.replace('%20', '-'))

console.log(url.includes('levithan'))
// to know about what is present in the given type





