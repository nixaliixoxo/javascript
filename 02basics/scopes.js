// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);

//scope
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     console.log(a, b, c); //10 20 30
// }
//console.log(a); --> gives error
//console.log(b); --> gives error
//console.log(c); //--> works //30

var c = 3000; //c ki value baad me 3000 se replace hoke 30 hi hoyegi this is the problem with scope
let a = 1000; // ye nhi hogi replace as ye global scope ka a hai
if(true){
    let a = 10; // aur ye block scope ka
    const b = 20;
    var c = 30;
    console.log(a, b, c); //10 20 30
}
console.log(a); //1000
console.log(c); //30

// nested scope
function one (){
    const username = "neelakshi";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    //console.log(website); //error
    two();
}
one();

if(true){
    const username = "neelakshi";
    if(username === "neelakshi"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website); --> error
}
//console.log(username); --> error

//function
console.log(addOne(10));
function addOne(num){
    return num+1;
}
console.log(addOne(5));
//function expression
console.log(addTwo(10));
const addTwo = function(num){
    return num+2;
}
console.log(addOne(5));