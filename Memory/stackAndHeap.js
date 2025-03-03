// Stack (Premitive) =>

    // |                                  |
    // |                                  |
    // |                                  |
    // |  newName => "anothername"        |
    // |  newName => hiteshChoudhary      |
    // |  youtube => hiteshChoudhary      |
    // |__________________________________|

let youtube = "hiteshChoudhary"  
let newName = youtube

newName = "anothername"
console.log(youtube)
console.log(newName)

// [Heap(non-Premitive)=> Memory Refrence] => 

                            // _________________
                            // |                |
                            // |original        |
                            // |   data         |
                            // |                |
                            // |                |
                            // |                |
                            // |________________|

let userOne = {
    email:"user@gamil.com",
    upi:"user!ybl"
}

let userTwo = userOne
userOne.email = "shubham@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
