"use strict";
//premitive
//number,boolean, string 
//symbol //unique

//null=>typeof object
//undefined => undefined 
//nonpremitive
//object
// let val=3;
// let negval=-val;
// console.log(negval);
// console.log(1+2+"5");
// let val=+true;
// console.log(val);

// console.log(null==0);
// console.log(undefined>0);
// console.log("2">=1);
//premitive
//call by value means copy 
// boolean, number ,string , null , undefined, symbol , bigInt
// const score=100;
// const scoreValue=123.5

// const islog= false;
// const tempout= true;
// let useremail=undefined;
//symbol
// let id=Symbol('345');
// let id2=Symbol("345");
// console.log(id===id2);
// let big=13445323232324n;
//nonpremitive 
// call by refference means memory alllocate 
//function , array , objects
//function datattype is objectfunction 
// null ki datatype object hoti h 
//or null ki datatype aik bug h or obejct ko tag k liye 000 use kiya jata tha  starting me 1995 m 
//stack and heap
// let user= "laiba";
// let user2=user;
// user2="imran";
// console.log(user);
// console.log(user2);
// in premitive we give copy of variable not original so this use in stack memory
//heap
// let obj1= {
//    nam:"laib",
//    email:"laibfatima",
// };
// let obj2= obj1;
// obj2.email="aligmail.com";
// console.log(obj1.email);
// console.log(obj2.email);
//is me organl value assign hoti asli change b ho ga aghr hum change kry gy 
//now strings 
// let nme="laiba";
// let game = 40;
// console.log(nme + game + "score"); old method
// console.log(`the player ${nme} and socre is ${game}`);
//new method for string is also same 
// let nm1=new String("laiba");
// console.log(nm1[2]);
// console.log(nm1.__proto__);
// console.log(nm1.length);
// console.log(nm1.toUpperCase());
// console.log(nm1.charAt(2));
// console.log(nm1.indexOf("i"));
//substring and splice are smae but splice can work in reverse with minus 
// console.log(nm1.slice(-3,-1));
// const score=100;
// console.log(score);
// const balance = new Number(400);
// console.log(balance.toString());
// console.log(typeof balance);
// let num = 124.4665556;
// console.log(num.toFixed(3));
// console.log(num.toPrecision(3));
// let num1=100000000000000;
// console.log(num1.toLocaleString('en-IN'));
//math library 
// console.log(Math.random());
//0 or 1 k drmayn ki values dy ga 
// console.log((Math.random()*10)+1)
//10 values ko left side pr shift krny k liye or 1 ko plus kiya 0.1 yaa 0.4 ko avoid krny k liye
// console.log(Math.floor(Math.random()*10)+1);
//poora aik integer leny k liye 
// aghr hum ne max or min k drmya k value leni h to phr hum aik formula use krty hn 
let max= 20;
let min = 10;
console.log(Math.floor(Math.random()*(max-min+1))+min);