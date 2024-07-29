let a = 1020
// const b = 20
// var c = 40


if (true) {
    let a = 10
    const b = 20
    // console.log("INNER:",a )

}



// console.log(a);
//console.log(b);
// console.log(c);


function one() {
    const userName = "Suraj"
    function two() {
        // const website = "Youtube"
        console.log(userName);

    }
    // console.log(website);
    two()
}
// one()


if (true) {
    const userName = "Suraj"
    if (userName === "Suraj") {
        const website = " youtube"
        console.log(userName + website);
        
    }
    // console.log(website);

}

// console.log(userName);


//++++++++++++++++ intresting +++++++++++

 console.log(addone(5))
function addone(num){
    return num + 1
}


//addtwo(4)
const addtwo = function(num){
    return num + 2
}
// console.log(addtwo(4))