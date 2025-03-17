h1 =document.querySelector('h1');


function changecolor(color,delay,nextcolor) {
    setTimeout(() => {
        h1.style.color = color;
        nextcolor();
    }, delay);
    
    
}

/* callback hell */
changecolor('red',1000,()=>{
    changecolor('orange',2000,()=>{
        changecolor('pink',3000,()=>{
            changecolor('green',4000,()=>{
                changecolor('yellow',5000,()=>{
                    changecolor('blue',6000,()=>{
                        changecolor('purple',7000,()=>{
                            changecolor('black',8000,()=>{
                                changecolor('white',9000,()=>{
                                    changecolor('gray',10000,()=>{})
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}   )
/* changecolor('orange',2000);  
changecolor('pink',3000);
changecolor('green',4000);
changecolor('yellow',5000);
changecolor('blue',6000);
changecolor('purple',7000);
changecolor('black',8000);
changecolor('white',9000);
changecolor('gray',10000);

 */
/* setTimeout(() => {
    h1.style.color = 'red';
},1000);

setTimeout(() => {
    h1.style.color = 'orange';
},2000);

setTimeout(() => {
    h1.style.color = 'pink';
},3000);

setTimeout(() => {
    h1.style.color = 'green';
},4000);

setTimeout(() => {
    h1.style.color = 'yellow';
},5000);

 */