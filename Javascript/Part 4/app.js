/* /* for (let i = 1; i <=100; i++) {
    console.log(i);
    
} */

// odd number 
/*  for(let i=1; i<=5; i=i+2) {
    console.log(i);
    
}  */

/*  for(let i=2; i<=1000; i=i+2) {
    console.log(i);
}  */

/* let n =prompt("write your number")  
n=parseInt(n);
for (let i=n; i<=n*10; i=i+n) {
    console.log(i);
    
} */

/* While Loop */
/* let i =1;
while (i<=5){
    console.log(i)

    i++;
    
} */

/* 
let movie ="milind";

let guess = prompt("guess the movie");  

while ((guess != movie) && (guess !='quit')) {
    guess = prompt("wrong,guess the movie");
}

if(guess == movie){
    console.log("congratulations");
}else{
    console.log("quit");
}

 */

/* lopp with array */
/* let fruits = ['mango','apple','banana','litchi','orange'] 
for( let i=1; i<fruits.length; i=i+1) {
    console.log(i,fruits[i])
} */


let fruits =[ ['mango','apple','banana','litchi','orange'],['mango','apple','banana','litchi','orange'] ];
for (let i=0 ;i<fruits.length;i++){
    console.log(`list #${i}`);
    for (let j = 0; j<fruits[i].length; j++) {
        console.log(fruits[i][j]);
        
    }
}


for(char of "milindsangale"){
    console.log(char);
}


/* 

 let password = prompt('Enter the password');
 let passwordLength = password.trim();
 console.log(passwordLength); */



/* let str = "String Newstring"
console.log(str.toLocaleUpperCase());
 */

/* 
let String = "MILIUND Newstring";
console.log(String.toLocaleLowerCase());

 */

/* let Newstring = "String";
Newstring.indexOf('i');
console.log(Newstring.indexOf('i')); */
/* 

let index ="           String";
console.log("before :",index); */
/* let index1 = index.trim();
console.log("after :",index1);
let index2 = index1.toLocaleUpperCase();
console.log("after upper case :",index2); */
/* 
let newindex = index.trim().toLocaleUpperCase();
console.log(newindex); */




/* slice */
/* let String = "milind";

let Milindsan = String.toUpperCase();
console.log(Milindsan);

let Newstring = String.slice(1,8);
console.log(Newstring);
let Newstring1 = String.slice(1);
console.log(Newstring1);
let Newstring2 = String.slice(1,-1);
console.log(Newstring2);
let Newstring3 = String.slice(-1);
console.log(Newstring3);
let Newstring4 = String.slice(0,15);
console.log(Newstring4);
let Newstring5 = String.length;
console.log(Newstring5);


let milind= "Milind";
let milind1 = milind.length;
console.log(milind1);


 */

let str = "Ilovesanika";
let str1 = str.replace("love","anvesha")
console.log(str1);