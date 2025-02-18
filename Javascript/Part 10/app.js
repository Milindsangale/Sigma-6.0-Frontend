/* let btns = document.querySelectorAll("button");


for(btn of btns){
btn.addEventListener("click", sayhello);
btn.addEventListener("click", sayName);
}


function sayhello(){
    alert("hellow")
}


function sayName(){
    alert("sanikaa shivani")
}

 */

/* Activity */


let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h2 = document.querySelector("h2");
    let randomColor = getrandomcolor();
    h2.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    
    let body = document.querySelector("body");
    body.style.backgroundColor = randomColor;


    console.log("color updated")
});


function getrandomcolor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}