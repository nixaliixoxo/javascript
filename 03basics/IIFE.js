//IIFE
//jaise hi apne function likha usse turant hi execute krvana hai
//global scope se pollution nhi chahiye aur naya ye function scope bnana hai

//SYNTAX ()()
//first parenthesis is func definition next is execution call
(function heyiife(){  //this is named iife
    console.log("IIFE");
})();  //semicolo necessary to end call

//arrow functions inside iife
( () => {  //anonnymous iife
    console.log("function")
}
)();
//parameterised iife
( (name) => {
    console.log(name)
}
)("neelakshi"); //args can be passed here for iife


 