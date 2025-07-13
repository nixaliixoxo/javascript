//Primitive
// 7 types : string, number, boolean, null, undefined, symbol, BigInt
const score = 100
const scoree = 100.3
const flag = false;
const outsideTemp = null;
let userEmail; //undefined
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
const bigNum = 3475859490099598588n;


//Reference  or Non Primitive
// arrays, objects, functions
const numbers = [1,2,3,4,five];
let myObj = {
    name: "xyz",
    age: 20
}
const myfunc = function(){
    console.log(("xyzzz"));
}

console.log(typeof myfunc);

