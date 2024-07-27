//const tinderUser = new object()
const tinderUser = {}
tinderUser.id ="123456"
tinderUser.name = "Suraj"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser ={
    email : "surya@gmail.com",
    fullname : {
        userfullname :{
            firtname : "Suraj",
            lastname : "Jaiswal"

        }

    }
}
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a", 4: "b" }
const obj4 = {5: "a", 6: "b" }
//const obj3 = {obj1, obj2 }

//const obj3 = Object.assign({},obj1, obj2, obj4)


const obj3 = {...obj1 , ...obj2 , ...obj4}
//console.log(obj3);


const users =[
    {
        id : 1,
        eamil : "surya@gamail.com"
    },
    {
        id : 1,
        eamil : "surya@gamail.com"
    },
    {
        id : 1,
        eamil : "surya@gamail.com"
    },
    {
        id : 1,
        eamil : "surya@gamail.com"
    },
    {
        id : 1,
        eamil : "surya@gamail.com"
    },
    {
        id : 1,
        eamil : "surya@gamail.com"
    },
    {
        id : 1,
        eamil : "surya@gamail.com"
    }
]

users[1].eamil
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
