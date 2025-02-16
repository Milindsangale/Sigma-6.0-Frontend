console.log("part 8");


let arr = [1,2,3,4,5];


arr.forEach(function (el) {
    console.log(el);
});

 let print = function(el) {
    console.log(el);

};
arr.forEach(print); 
 


let every =[1,2,3,4].every((el) => (el%2==0));


let every1 =[2,4].every((el) => (el%2==0));




let every12 =[2,4].some((el) => (el%2==0));




 let nums = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,
            1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,
            1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4
             ];
let newnumber = nums.reduce((res,el) => res+el);
console.log(newnumber);


function milindsangale(a,b) {
    return a+b;
    
}
let xxx=milind