/* Q1 */
let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText="click me";
let body = document.querySelector('body');
body.append(btn);
body.append(input);

/* Q2 */
btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");


/* Q3 */
let btns = document.querySelector("#btn");
btns.classList.add("btnstyale");


let h1 = document.createElement("h1");
h1.innerText="DOM Practice";
h1.classList.add("h1");
body.append(h1);


let p = document.createElement("p");
p.innerText= "Apna College Delta Practice";

body.append(p);