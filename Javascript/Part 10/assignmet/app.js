/* let input = document.querySelector("input");
let p = document.querySelector('p');



input.addEventListener("input",function(){
    console.log(input.value);
    p.innerText= input.value;
});
 */

/* 
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor="green";
});

 */
let input = document.querySelector("input");

let h1= document.querySelector("h1");
let h2= document.querySelector("h2");
let h3= document.querySelector("h3");
let h4= document.querySelector("h4");
let h5= document.querySelector("h5");
let h6= document.querySelector("h6");

input.addEventListener("input",function(){
    console.log(input.value);
    h1.innerText= input.value;
    h2.innerText= input.value;
    h3.innerText= input.value;
    h4.innerText= input.value;
    h5.innerText= input.value;
    h6.innerText= input.value;
});
 