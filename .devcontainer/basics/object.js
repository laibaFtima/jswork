// let s1=3433;
// let s2=34343;
// let s3=343;
// console.log(Array.of(s1,s2,s3));
// let sym=Symbol("hello");
// let obj={
//       nme:"laiba", //object me keys ko b asa string liya jata h 
//       rollnum:150,
//       email:"laiba@gmail.com",
//       [sym]:"hell",
// };
// console.log(obj.email);
// console.log(obj["email"]); //is me double koma me keys likhty hn 
//aghr symbol ko objectm e add kr na h to asy krty hn 
// console.log(obj[sym]);
// obj.email ="hitejr@gmail.com"
//Object.freeze(obj);
// obj.email ="djfnsjksf" 
// console.log(obj);
// obj.greeting =function(){
//     console.log(`hell u hell ${this.nme}`);
// }
// console.log(obj.greeting());

// let tinderUser={

// };
// tinderUser.id=123;
// tinderUser.email="fjofg@gmil.com";
//console.log(tinderUser);
//nested object
// let tind={
//     nme:"laiba",
//     fullName:{
//         nom:"hotesh",
//         num:239249,
//         useInfo:{
//             host:"wijew",
//             work:"jdidjpf",
//         }
//     }
// }
// console.log(tind.fullName.useInfo.work);
// const obj1={1:"a",2:"b"};
//const obj2={3:"c",4:"d"};
//const obj3={obj1,obj2}; fzul method
//const obj3=Object.assign({},obj1,obj2); its better {} ye target h baki source
//const obj3 ={...obj1, ...obj2};
//console.log(obj3);
// const arr =[
//     {
//         email:"assd",
//         num:2324,
//     },
//     {
//         emial:"dudsdfd",
//         num:23242
//     },
// ];
//console.log(arr[0].email);
//object ki keys k liye humy 
//console.log(Object.keys(tind));
//similarly for values
//for both  in array
//console.log(Object.entries(tind));
//object ki property check krny k liye 
//console.log(tind.hasOwnProperty('nme'));
//ho gya


//now destructure object 
let me={
    nme:"laiba",
    course:"forntend advance",
    fee:"zero"
}
// in react me hum is ko kuch asy cal krty hn 
const{course : mainlead}=me;
console.log(mainlead);
//now we have to destructure it 
//json api me object k tor pr data represent krti ya store krti me neas object or array b kbhi kbhi use hota 



