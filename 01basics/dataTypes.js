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
let nos = [1,2,3,4,"five"];
let myObj = {
    name: "xyz",
    age: 20
}
const myfunc = function(){
    console.log(("xyzzz"));
}

console.log(typeof myfunc);

//************STACK VS HEAP*****************/
// STACK ---> primitive data types use stack ---> copy of variable is sent
// HEAP ---> reference data types use heap ---> reference of variable is sent

//primitive data type
let myname = "abc";
let newname = myname
newname = "xyz"
console.log(myname)
console.log(newname)

// reference data type
let userOne = {
    email: "user@google.com",
    id: 1
}

let userTwo = userOne;
userTwo.id = 2;
console.log(userOne)
console.log(userTwo)