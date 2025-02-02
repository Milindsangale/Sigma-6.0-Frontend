
/* Q 1 */
let num =10;
if(num%10==0){
    console.log("good");
}else{
    console.log("bad");
}


/* Q.2 */
/* let Name =prompt("Enter your name");
let age =prompt("Enter your age"); */
/* console.log(`${Name} is ${age} years old `);
 */



/* Q.4 */
let quarter ="4"

switch (quarter) {
    case "1":
        console.log("January, February, March");        
        break;
    case "2":
        console.log("April, May, June");        
        break;
    case "3":
        console.log("July, August, September");        
        break;
    case "4":
        console.log("October, November, December");        
        break;

    default:
        break;
}


/* Q.5 */


let str ="golden string"
if ((str[0] == "g") && (str.length>5)) {    
    console.log("it is a goldan string");
}else{
    console.log("it is not a goldan string");
}


/* Q.5 */
let a = 40;
let b = 20;
let c = 30;

if (a > b && a > c) {
    console.log("a is greater");
} else if (b > a && b > c) {
    console.log("b is greater");
} else {
    console.log("c is greater");
}


/* Q.6 */
let num1 = 1215415641652;
let num2 = 1215445465455;

if((num1%5) ==(num2%5)){   
    console.log("last digit is same");
}else{
    console.log("last digit is not same");
}