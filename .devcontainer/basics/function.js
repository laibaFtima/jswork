// //function new topic
// function add(num1 , num2){
//     if(num1||num2===undefined)
//     {
//         console.log("enter number");
//         return
//     }
// return num1+num2;
// }
// const result =add(2,"");    //aghr hum kisis value me stroe kry gy to  
// console.log(result);       //result me value is liye ni h ku k hum ne
                      //  function ki value return ni krwai jb value return krwaty us 
                       //us ko store krwaty hn ya print bhr function k 
                       //aghr user valeu ki jghah string yaa koi or value pass kr dy to ye 
                       //us ko b add kr dy ga hum idr types define ni ki is k liye 
                       //condition lgani prti h 
//function me  cart me zyada values add krny k liye kya krty 
// function cart(...val1){
//     return val1;
// }
// console.log(cart(2334,4545,5565,234));
//... this is called spread operator and rest operator

//now function me object ko kesy pass kiya jara h 
// let obj ={
//     nme:"laiba",
//     email:"laiba@gamil.com",
// }
// function myfunc(myobject){
//    console.log(`rice of ${myobject.nme} and email ${myobject.email}`);
// }
// myfunc(obj);


//now array ko function me kesy pass krty hn 
// let arr=[134,35,46,565];
// function secvalue(getArr){
//    return getArr[1];
// }
// console.log(secvalue(arr));
//now m done


//aj hum this k bary me prhy gy 
// const user={
//    usernme:"laiba",
//    email:"laibagmail.com",
//    greet: function (){
//      console.log(`${this.usernme},wellcome to the js`);
//       console.log(this);
      
//    }
 
// }
// user.greet();    //this current context k call k liye hota h 
// user.usernme="ali";
// user.greet();
//console.log(this);  is me empty object return ho ga asy 
// function chai(){
//    let use="liba";
//    console.log(this.use);
// }
// chai();
// let chi =(num1,num2)=>{
//    return num1+num2;
// }
// console.log(chi(4,6))
// let chi =()=>{
//    let use="linear";
//    console.log(this);
// }
// chi();
//arrow function me this work ni krta object k under  or without curly braces 
//me humy return ni likhna prta 
// let breek=(num1,num2)=>(num1+num2);
// console.log(breek(3,56));




//now IIFE immediately invoked function epression
(function chai (){
   console.log("hello babe");
})();
((nme)=>{
   console.log(`aby teri to ${nme}`);
})("laiba");
//now m done