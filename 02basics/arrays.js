// ARRAY
const myArr = [0,1,2,3,4,5, true, "hitesh"];
const myArr2 = new Array(1,2,3,4,5);
console.log(myArr[0]);
console.log(myArr.length);
// resizable, mixed data type, even array inside arrays
// can be accessed using 0 based indexing 
// jab array pe copy operation krenge js me toh ye shallow copy bnayega (concept of shallow vs deep copies)
// shallow copy of an obj is a copy whose properties share the same reference point
// deep copies do not share the same reference

// array methods
// myArr.push(6);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);
console.log(Array.isArray(newArr));
console.log(newArr[1]);

//slice and splice
console.log("A ", myArr);
const myA = myArr.slice(1, 3);
console.log(myA);
console.log("B ", myArr);
const myA2 = myArr.splice(1,3);
console.log(myA2);
console.log("C ", myArr);


const marvelHeros = ["thor", "ironman"];
const dcHeros = ["superman", "flash"];
// marvelHeros.push(dcHeros); //merge ni krta ye dono array ko, instead array inside array krdeta hai
// console.log(marvelHeros);
// console.log(marvelHeros[0][1]);

//concat
let allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

//spread operator
allHeros = [...marvelHeros, ...dcHeros];
console.log(allHeros);

// flat
const newArry = [1,2,3,[4,5,6],7,[6,7,[4,9]]];
const nextArry = newArry.flat(Infinity);
console.log(nextArry);

// isArray & array.from
console.log(Array.isArray("abc"));
console.log(Array.from("abc"));
console.log(Array.from({name: "hitesh"})); // gives empty array kyuki isse smjh ni aa rha ki keys se array bnana hai ya values se

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

