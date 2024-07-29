//Immediately Invoked Function Expressions (IIFE)

(function chai (){
    // named IIFE 
    console.log(`db connected`);
})();


( ( name)=>{
    console.log(`database connected two ${name}`)
})("Suraj")