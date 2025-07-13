// string interpolation or backticks

const name = "abc ";
const age = 20
console.log(name, age);
console.log(name + age);

console.log(`Hello my name is ${name} and my age is ${age}`);

//another way to create strings
let gameName = new String('candycrush');
console.log(gameName);

//indexing is possible in strings
// string is an object not an array
// index is key and char of string is the value
//length property and other methods are also given to strings 
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'))

let newstr = gameName.substring(0, 4);
console.log(newstr);

newstr = gameName.slice(0, 4);
console.log(newstr);
newstr = gameName.slice(-4, -1);
console.log(newstr);

const newStr = "    jidwfrklkrogm      "
console.log(newStr);
console.log(newStr.trim());

const url = "https://hitesh%20choudhary";
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));

gameName = "hitesh-hc-boom";
const words = gameName.split('-');
console.log(gameName.split('-'));
console.log(words);
console.log(words[0]);