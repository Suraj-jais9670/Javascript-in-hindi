// Dates => date in js also called as objects.
let myDate = new Date()
//console.log(myDate);

//console.log(typeof myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getHours());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2024, 0, 25)
// let myCreatedDate = new Date(2024, 0, 25, 5, 4)
// let myCreatedDate = new Date("2024-03-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()

//console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getSeconds());
// console.log(newDate.getHours());


// `${newDate.getDay()}and the time`

newDate.toLocaleString('deafult',{
    weekday:"long" ,
})