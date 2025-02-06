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