/* let student={
    name:"milind",
    age:"20",
    marks:"CGPA:8.55"


}; */
/* 
const post={
    username:"milindsangale",
    content:"-gwgwfgq",
    likes:"222",
    reposts:" yes/no",
    tage:"saniak,anvesha,kareeena"
};
 
 */

/* const classInfo = {
    aman :{
        grade:"A",
        city:"pune",
    },
    milind :{
        grade:"A",
        city:"pune",
    },
    shrddah:{
        grade:"A",
        city:"pune",
    },
    anvesha:{
        grade:"A",
        city:"pune",
    },
}; */


const  max = prompt("enter the max numbers");


const random =Math.floor(Math.random() * max)+1;


let guess =prompt("guess thenumber");

while(true) {
    if(guess =="quit") {
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you are right! congratulation");
        break
    }else if (guess < random) {
        guess=prompt("Hint:your guess was too small,plese try agian")
    }else{
        guess=prompt("Hint:your guess was too large,plese try agian")
    }
    
    
    
  /*   else{
        prompt("your guess number is Wrong ples try agian");
    } */
}