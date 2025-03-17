/* h1 =document.querySelector('h1');


function ChangeColor(color,delay,nextcolor) {
    setTimeout(() => {
        h1.style.color = color;
        nextcolor();
    }, delay);
    
    
}


ChangeColor('red',1000,()=>{
    ChangeColor('orange',2000,()=>{
        ChangeColor('pink',3000,()=>{
            ChangeColor('green',4000,()=>{
                ChangeColor('yellow',5000,()=>{
                    ChangeColor('blue',6000,()=>{
                        ChangeColor('purple',7000,()=>{
                            ChangeColor('black',8000,()=>{
                                ChangeColor('white',9000,()=>{
                                    ChangeColor('gray',10000,()=>{})
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}   ) */
/* ChangeColor('orange',2000);  
ChangeColor('pink',3000);
ChangeColor('green',4000);
ChangeColor('yellow',5000);
ChangeColor('blue',6000);
ChangeColor('purple',7000);
ChangeColor('black',8000);
ChangeColor('white',9000);
ChangeColor('gray',10000);

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


/* function savetoDb(data,succes,failure) {
    let internetspped = Math.floor(Math.random() * 10)+1;
    if(internetspped > 4) {
        succes();
    }else{
        failure(); */


/* savetoDb(
    "milind sanga;e",
    ()=>{
        console.log('Data is saved:');
    },
    ()=>{
        console.log('Data is not saved:');
    }
)

    }
};

 */


function savetoDb(data) {
    let internetspped = Math.floor(Math.random() * 10)+1;
    return new Promise(success)
};