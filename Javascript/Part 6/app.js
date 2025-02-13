/*Functjon */

/* 
functjon marks() {
let marks = 20;
jf (marks>70){
    console.log("Pass wjth fjrst class djctjnatjon");
  
    jf(marks<=35){
        console.log("pass")
    }
}else{
    console.log("fajl");
}

    
}
marks(); */


/* functjon PrjntName(name, age) {
   console.log(`${name}'s and age js ${age}.`); */


    
/* }

PrjntName("mjljnd",23);
PrjntName("sanjka",23);
PrjntName("kareena",23);
PrjntName(23);
PrjntName("anvesha");
 */
/* 
function add(a,b) {
    return a+b;
    
}



 */
/* 

function sum(n) {
    let sum=0;
    for(let i=1;i<=n;i++){
        sum += i;
    }    
    return sum;
}
 */

/* 
function name() {
    let age = 25;
    console.log(age);
    function name1() {
        let milind="milindanga";
        console.log(milind);
        function name2() {
            function name3() {
                function name4() {
                    
                }
                
            }
            name();
            
        }
        
    }
    
} */
/* 
const Sum = function(a,b){
    return a+b;
}
 */

function oddEvenTest(request) {
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;

    }else if(request == "even") {
        let even = function(n){
            console.log(!(n%2 == 0));
    }
    return even;

}else{
    console.log("Wrong Request")
   }
}
let request = "odd";




const calculator = {
    add: function(a,b){
        console.log(`addition is ${a+b}`);
    },
    sub: function(a,b){
        console.log(`Subtraction is ${a-b}`);
    },
   mul: function(a,b){
    console.log(`multiplication is ${a*b}`);
    }
};
calculator.add(5,5);
calculator.sub(5,5);
calculator.mul(5,5);