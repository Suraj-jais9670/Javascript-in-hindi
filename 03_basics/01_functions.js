// functions 

function sayMyName() {
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("s");
    console.log("s");
}
//sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumber(3, 5)
//console.log("Result:",result);

function loginUserMessage(username = "sam") {
    //if(username === undefined)
    if (!username) {
        console.log("please enter username");
        return
    }

    return `${username} just logged in`

}
//console.log(loginUserMessage())

function calculateCartPricce(val1, val2 ,...num1) {
    return num1
}
//console.log(calculateCartPricce(200,466,500,2000));

const user = {
     username : "Suraj",
     prices: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)
handleObject({
    username: "Surya",
    price : 222
})

const myNewArray = [200,600, 400 ,500 ]

function returnSecondValue(getArray){
        return getArray[2]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([4555, 451 ,500 ,200]));