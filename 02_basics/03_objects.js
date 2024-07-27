//singleton

// objects literals

const mySym = Symbol("key1")

const jsUser ={
    name : "Suraj",
   "full name" : "Suraj kumar",
  [ mySym] :"key1",
    age : 22,
    location : "Uttar Pradesh",
    email: "surajkumarjaiswal@gamail.com",
    isLoggedIn : false,
    lastLogginDays: ["Tuesday","Wednesday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
 //console.log(jsUser["full name"]);
 //console.log(jsUser[mySym]);

 jsUser.email = "surayakumar@gmail.com"
 Object.freeze(jsUser)
 jsUser.email = "surya@gmail.com"
 console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js coders");
}

jsUser.greetingTwo = function(){
    console.log(`hello js coders, ${this.name}`);
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());