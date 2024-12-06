//stack(primitive), heap(non premitive)

let myname = "vineetgulia"

let anothername = myname
anothername = "chaiaurcode"

console.log(myname)
console.log(anothername)

let user1 = {
    email: "google@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "user@gmail.com"

console.log(user1.email)
console.log(user2.email)

// stack mein voh copy bna deta h aur heap m refrence deta h toh agr ek m change krege toh dono m change hoga