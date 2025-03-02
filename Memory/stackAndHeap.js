// Stack (Premitive), [Heap(non-Premitive)=> Memory Refrence]


let youtube = "hiteshChoudhary"
let newName = youtube

newName = "anothername"
console.log(youtube)
console.log(newName)



let userOne = {
    email:"user@gamil.com",
    upi:"user!ybl"
}

let userTwo = userOne
userOne.email = "shubham@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
