/* console.dir(document.querySelectorAll("h1"));
console.dir(document.querySelectorAll("#description"));
console.dir(document.querySelector(".images")); */


/*  
let links = document.querySelectorAll(".box a")

 for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundcolor ="purple";
    
}



for(link of links) {
    link.style.color = "white";
} 

 */

/* let links = document.querySelector('h1');
console.dir(links);
 */


/* 'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself. */




let para = document.createElement('p');
para.innerText= "Hey I am red";
let body=document.querySelector('body');
body.append(para);

para.style.color= "red";


let h3 = document.createElement("h3");
h3.innerText= "I'm a blue h3";
body.appendChild(h3);
h3.style.color="blue";



let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('para2');


h1.innerText="I'am in a div";
para.innerText= "Me To";

div.append(h1);
div.append(para2);

div.classList.add("box");
let bodys = document.querySelector("body");
bodys.append(div);
