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

//********OPERATIONS**********/
let value = 3;
let negval = -value;
console.log(negval);

let str1 = "abc";
let str2 = " cde";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + "2");
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log("1" - 2);

console.log(+true);
console.log(+"");

let num1, num2, num3; 
num1 = num2 = num3 = 2+2;  // not readable at all even if works

//*********DATA TYPES***********/
//avoid such comparisons & write clean code
console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined < 0)
console.log(undefined == 0)
console.log(undefined > 0)

// strict check ===
console.log("2" == 2);
console.log("2" === 2);
