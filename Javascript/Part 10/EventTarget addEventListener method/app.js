/* let p = document.querySelector("p");


p.addEventListener("click", function(){
    console.log("milindsngale");
})


let div = document.querySelector("div");

div.addEventListener("click", function(){
    console.log("milindsngale");
})
 */

/* let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let h5 = document.querySelector("h5");
let h6 = document.querySelector("h6");

function chnageColor() {
    console.log(this.innerText);
    this.style.backgroundColor= "pink";
}

btn.addEventListener("click",chnageColor);
h1.addEventListener("click",chnageColor);
h2.addEventListener("click",chnageColor);
h3.addEventListener("click",chnageColor);
h4.addEventListener("click",chnageColor);
h5.addEventListener("click",chnageColor);
h6.addEventListener("click",chnageColor); */
/* 
btn.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor="pink";
});
h1.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor="pink";
});
h2.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor="pink";
});
h3.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor="pink";
});
h4.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor="pink";
});
h5.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor="pink";
});
h6.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor="pink";
});
 */


/* let input = document.querySelector("input");


input.addEventListener("keydown", function(event){
    console.log(event);
    console.log("key wa press");

}) 

input.addEventListener("keyup", function(event){
    console.log("code =",event.code);

    if(event.code == "ArrowUp") {
        console.log("character move forward");
    } else if(event.code == "ArrowDown") {
        console.log("character move backward");
    }  else if(event.code == "ArrowLeft") {
        console.log("character move left");
    }   else if(event.code == "ArrowRight") {
        console.log("character move right");
    }      

}) 
 */


/* Form */


/* let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let inp = document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
});
 */
let form=document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
});

let user = document.querySelector("#user");
/* changed event */
user.addEventListener("change",function() {
    console.log("input changed");
    console.log("final value= ",this.value)
});

/* input event */
user.addEventListener("change",function() {
    console.log("input event");
    console.log("final value= ",this.value)
});