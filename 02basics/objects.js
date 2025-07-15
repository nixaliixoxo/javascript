//OBJECTS
// JS me bjects 2 tarah se declare kr skte hai ---> ek literal ki tarah ek constructor ki tarah
// singleton ---> ye apne tarah ka ek hi object hai created by constructor method --->using object.create
// literal se multiple objects bna sakte hai

//object literals
//object has keys & values
//keys are unique in js and are of string type automatically
const mySym = Symbol("key1");
const jsuser = {
    name: "abc",
    "full anme": "abcdef",
    email: "abc@gmail.com",
    [mySym]: "mykey1",
    age: 20,
    isLoggedIn: true,
    lastUsedDay: ["monday", "wed"]
}

//2 ways to access objects
//1 
console.log(jsuser.email);
//2 (full name sirf iss method se access kr paoge so this is also imp at several pts)
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);
console.log(jsuser[mySym]);
console.log(typeof jsuser[mySym]);

//to change value
jsuser.email = "xyz@gmail.com";
jsuser.greeting = function(){
    console.log("hey js user");
    console.log(`hey js user ${this.name}`);
}
console.log(jsuser.greeting); // gives reference of function
jsuser.greeting(); //function called

//freeze doesnt let any changes happen to object
Object.freeze(jsuser);
jsuser.email = "yehaigmail"


// const tinderUser = new Object(); //---> singleton method
const tinderUser = {};
tinderUser.id = "123abcc";
tinderUser.name = "Sam";
console.log(tinderUser);

const regularUser = {
    email: "any@gmail.com",
    fullname: {
        userfullname: {
            firstname: "neelakshi",
            lastname: "sachdeva"
        }
    }
}
// nesting
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj4 = {
    5: "c",
    6: "d"
}
const obj3 = {obj1, obj2};
console.log(obj3);
//object.assign(target, source) and returns an object
const obj33 = Object.assign({}, obj1, obj2, obj4);
//spread operator - most used
console.log(obj33);
const obj333 = {...obj1, ...obj2, ...obj4};
console.log(obj333);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    },
    {
        id: 3,
        email: "bc@gmail.com"
    }
]

// accessing above ---> users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // outputs in form of array so loop lga skte hai inhe use kr skte hai
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('id'));

//OBJECT DESTRUCTURING
const course = {
    courseName: "js in hindi",
    coursePrice: 999,
    courseInstructor: "hitesh"
}
 //console.log(course.courseInstructor);
 //const {courseInstructor} = course;
const {courseInstructor: instruct} = course;
console.log(instruct);
