/* console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!'); */
/* let a = 10;
let b = 20;
console.log("sum is :",a + b);
 */


/* let pen = 10;
let pencil = 20; */
/* console.log("Total Price is  :",pen + pencil); */
/* let milind = "Total price is :" + (pen + pencil)+ " ruppes"; */
/* console.log(milind); */
/* let sumall =`Total price is : ${pen + pencil} ruppes`;
console.log(sumall);
console.log(`Total price is : ${pen + pencil} ruppes`;); */


// Arithmatic operators
/* let a=10;
let b=20;
console.log("sum is :",a+b);
console.log("sub is :",a-b);
console.log("mul is :",a*b);
console.log("div is :",a/b);

console.log(a++);
console.log(++a); */


//Assignment operators
/* let x=10;
let y=20;
x=y;
console.log(x);
 */

 //Comparison operators
/* 
age =21;
console.log("age is :",age<20);
console.log("age is :",age>20);
console.log("age is :",age==21);
console.log("age is :",age>=20);
console.log("age is :",age<=20); 



 */

/* 

console.log("before my if statement");
let age = 17;
if(age>18){
    console.log("you are eligible to vote");
}
else{
    console.log("you are not eligible to vote");
}
console.log("after my if statement");

 */

/* let colour = red;
if(colour=="red"){
    console.log("stop the vehicle");
}


 */

/* console.log("before my if statement");

 */


let size = "XL";

if(size === "XL"){
    console.log("Price is Rs.250");
}else if(size === "L") {
    console.log("Price is Rs.200");
}else if(size === "M") {
    console.log("Price is Rs.100");
} else{
    console.log("Price is Rs.50");
}
 

let str = "Hello World";
if((str[0] === "H") && ((str.length>5))){
    console.log("String is good string");
}else{
    console.log("String is not good string");
}


/* questions */
let num = 12;

if((num % 3 === 0) && ((num+1 ==15) || (num-1 == 11))){
    console.log("safe");
}else{
    console.log("unsafe");
}



if ((true) && (false)) {
    console.log("Hello");
}else{
    console.log("World");
}


// switch statement example
let day = "monday";

switch (day) {
    case "sunday":
        console.log("Today is Sunday");
        break;
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    case "thursday":
        console.log("Today is Thursday");
        break;
    case "friday":
        console.log("Today is Friday");
        break;
    case "saturday":
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}



/* practice Questions */
let days = prompt;

switch (days) {
    case "1":
        console.log("Today is Sunday");
        break;
    case "2":
        console.log("Today is Monday");
        break;
    case "3":
        console.log("Today is Tuesday");
        break;
    case "4":
        console.log("Today is Wednesday");
        break;
    case "5":
        console.log("Today is Thursday");
        break;
    case "6":
        console.log("Today is Friday");
        break;
    case "7":
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}


/* alert("Hello World"); */

console.warn("This is warning message");
console.error("This is error message");