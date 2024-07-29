const user = {
    username : "suraj",
    price : 2313,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}
//     user.welcomeMessage()
//    user.username ="sam"
//    user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "suraj"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "suraj"
//     console.log(this.username);
// }
// chai()

// const chai = ()=>{
//     let username = "suraj"
//     console.log(this);
// }
// chai()

// const addone =(num1 , num2) => {
//     return num1 + num2

// }
// console.log(addone(2,1));

// const addone = (num1 , num2) =>  num1 + num2
// const addone = (num1 , num2) =>  (num1 + num2)
const addone = (num1 , num2) =>  ({username : "Suraj"})

console.log(addone(2,1));