// DATE OBJECT 
let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-14-2023");
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));  //to get time in secs and not ms

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

//string interpolation
// `${newDate.getDay()} and the time is`

// tolocalestring is impppppp
// properties can be defined & customised 
newDate.toLocaleString('default', {
    weekday: "long"
})

