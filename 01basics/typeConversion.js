let score = 33
//const {score} = req.body;
console.log(typeof score);
console.log(typeof(score));
score = "33";
console.log(typeof score);

let valueInNum = Number(score); //converts score to number
console.log(typeof valueInNum); 
score = "33abc"
console.log(typeof valueInNum); //still number
console.log(valueInNum); //NaN

score = null;
valueInNum = Number(score);
console.log(typeof valueInNum);
console.log(valueInNum);

score = undefined;
valueInNum = Number(score);
console.log(typeof valueInNum);
console.log(valueInNum);

score = true;
valueInNum = Number(score);
console.log(typeof valueInNum);
console.log(valueInNum);

// "33" ---> 33
// "33abc" ---> NaN
// true ---> 1
// false ---> 0
// null ---> 0
// undefined ---> Nan

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

isLoggedIn = 0
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

isLoggedIn = "niki"
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let num = 33
let str = String(num);
console.log(typeof str);
