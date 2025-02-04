/* Q1 */

let msg= "          help!               ";
let msg1=msg.trim();
let msg2=msg1.toLocaleUpperCase();
console.log(msg2);

/*  Output
HELP! */


/* Q2*/

let Name ="ApnaCollge";
let name1 = Name.slice(4,9);
console.log(name1);
let name2 = Name.indexOf("na");
console.log(name2);
let name3 = Name.replace("Apna","Our");
console.log(name3);
let name4 = Name.length;
console.log(name4);
let name5 = Name.slice(4,10);
console.log(name5);
let name6 = Name.replace("l","t");
console.log(name6);


/*  Output
practice.js:13 Collg
practice.js:15 2
practice.js:17 OurCollge
practice.js:19 10
practice.js:21 Collge
practice.js:23 ApnaCotlge */