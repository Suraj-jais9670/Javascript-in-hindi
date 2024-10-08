// primitive datatype

// 7 types : string ,Number ,boolean ,null ,undefined ,symbol , bigint

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('1244')
const anotherId = Symbol('1244')

console.log(id == anotherId);

const bigNumber = 1322333333333333333333n

//Reference type (Non primitive)
//Array ,ojects ,functions

const heros = ["saktiman","naagraj", "doga"]
let myobj ={
    name : "suraj",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);

// +++++++++++++++++++++++++++++++++++++++++

// sstack(primitive) , Heap(non-primitive)

let myYoutubename = "suryadot.com"

let anothername = myYoutubename
anothername = "cofee aur code"

 console.log(myYoutubename);
 console.log(anothername);


 let userOne = {
    eamil: "suryakumarjaiswal@gmail.com",
    upi: "suryapaytm@ybl"
 }

 let userTwo = userOne
 userTwo.email = "surya9670@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);