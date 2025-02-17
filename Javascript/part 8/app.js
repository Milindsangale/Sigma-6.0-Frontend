/* console.log("part 8");


let arr = [1,2,3,4,5];
 */
/* 
arr.forEach(function (el) {
    console.log(el);
});

 let print = function(el) {
    console.log(el);

};
arr.forEach(print);  */
 
/* 

let every =[1,2,3,4].every((el) => (el%2==0));


let every1 =[2,4].every((el) => (el%2==0));




let every12 =[2,4].some((el) => (el%2==0));
 */



/*  let nums = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,
            1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,
            1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4
             ];
let newnumber = nums.reduce((res,el) => res+el);
console.log(newnumber); */

/* 
function milindsangale(a,b) {
    return a+b;
    
}
let xxx=milind
 */

let arr = [1,2,3,4,5,6,7,8,9,11,14];
 
let max = arr.reduce((max,el)=> {
    if(max < el) {
        return el;
    }else{
        return max;
    }
});


console.log(`large value in given array is ${max}`);


let min = arr.reduce((min,el)=> {
    if(min > el) {
        return el;
    }else{
        return min;
    }
});

console.log(`Small value in given array is ${min}`);


/* muliple is */
let array = [10,20,35,40,50,60,70,50,80,10,100];

let remainder = array.every((el)=>{
    if(el%10 == 0){
        return el;
    }
});





/* Default parameters */

function sum(a, b =10) {
    return a + b;
    
}

let sums = sum(4);
console.log(sums);


console.log(..."milindsabfae")


/* Spread */

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let oddeven =[...odd,...even,...array];


const data = {
    name: "milindsangale",
    gmail: "smilind900@gmail.com",
    friend: "anvesha sanika",
    Age:20,
}


const biodata = {...data};

console.log(data);
console.log(biodata);