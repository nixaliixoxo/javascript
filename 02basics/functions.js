// function sayMyName(){
//     console.log("Neelakshi");
// }
// sayMyName();

function addTwoNumbers(num1, num2){ //ye hai aprameters
    console.log(num1 + num2);
}
addTwoNumbers(); //undefined pass ho jayega in parameters so NaN aa jayega
addTwoNumbers(3, 4); // ye hai args
addTwoNumbers(3, "4");
addTwoNumbers(3, "hello");
addTwoNumbers(3, null);

let result = addTwoNumbers(10, 8);
console.log(result);

function addTwoNumbers2(num1, num2){ //ye hai aprameters
   return num1 + num2;
}
result = addTwoNumbers2(10,18);
console.log(result);

function loginUserMsg(username){
    return `${username} just logged in`;
}
console.log(loginUserMsg("Neelakshi"));
console.log(loginUserMsg("")); //empty string sth msg print hoga
console.log(loginUserMsg()); // undefined (not null)

function loginUserMsg2(username){
    //if(username === undefined){ or
    if(!username){
        console.log("pls enter a username");
        return;
    } 
    return `${username} just logged in`;
}
console.log(loginUserMsg2()); 

function loginUserMsg3(username = "Sam"){
    return `${username} just logged in`;
}
console.log(loginUserMsg3()); 
console.log(loginUserMsg3("gauri"));

// REST OPERATOR
// function calculateCartPrice(...num1){
//     return num1; //returns an array
// }
//console.log(calculateCartPrice(200, 400, 500));

// function calculateCartPrice(val1, val2, ...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "abc", 
    price: 199
}
function handleObject(objj){
    console.log(`username is ${objj.username} and price is ${objj.price}`);
}
handleObject(user);
handleObject({
    username: "xyz",
    price: 2000
});

const newArray = [200, 400, 500];
function returnindex2val(getArr){
    return getArr[2];
}
console.log(returnindex2val(newArray));
console.log(returnindex2val([2]));
console.log(returnindex2val([450, 250, 650, 750, 950]));


















