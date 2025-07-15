// this defines current context
const user = {
    username: "abc",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMsg();
// user.username = "Sam";
// user.welcomeMsg();

//console.log(this); //empty object

//this here prints so much so this ke andar kuch toh rkha hua hai
function chai2(){
    console.log(this);
}
chai();

function chai2(){
    let username = "neelakshi";
    console.log(this.username); //undefined
}
chai2();

//FUNCTION EXP
const chai = function(){
    username = "neelakshi";
    console.log(this.username);
}

//ARROW FUNCTIONS
const chaii = () => {
    username = "neelakshi";
    console.log(this.username); //empty {}
}

const add2 = (num1, num2) => {
    return num1 + num2;
}

//implicit return
// const addtwo2 = (num1, num2) => num1+num2;
//or
// const addtwo2 = (num1, num2) => (num1+num2);

