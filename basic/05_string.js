const name = "suraj"
const repoCount = 50

//console.log(name + repoCount + "value") # in modern way this is not better way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('suraj')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("r"));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-4,4)
console.log(anotherString);


const newStringOne = "suraj"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://suraj.com/suraj%20jaiswal"

console.log(url.replace('20%','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-') ); 