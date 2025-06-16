//array 2
// let hero=["laiba","shakti","browm"];
// let animal=["parrot","lion","zebra","kangroo"];
// let comb=hero.push(anima
//  let combo=hero.concat(animal)
// console.log(combo);

//spread operator
// const item=[...hero, ...animal];
// console.log(item);
//flat to mke one array
// let newa=[1,24,545,[24,3445,54,],[45,56,8,]];
// const form=newa.flat(Infinity);
// console.log(form);
// console.log(Array.isArray("laiba"));// ye poochny k liye k ye array h yaa ni 
// console.log(Array.from("mlaika")); //array me convert krny k liye 
// console.log(Array.from({
//     name:"laiba",
// }))// is trha se khali object de ga menion krna pry ga key yaa values ki array bnani 
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

let tinderUser={

};
tinderUser.id=123;
tinderUser.email="fjofg@gmil.com";
//console.log(tinderUser);
//nested object
let tind={
    nme:"laiba",
    fullName:{
        nom:"hotesh",
        num:239249,
        useInfo:{
            host:"wijew",
            work:"jdidjpf",
        }
    }
}
console.log(tind.fullName.useInfo.work);
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
//const obj3={obj1,obj2}; fzul method
//const obj3=Object.assign({},obj1,obj2); its better {} ye target h baki source
const obj3 ={...obj1, ...obj2};
//console.log(obj3);
const arr =[
    {
        email:"assd",
        num:2324,
    },
    {
        emial:"dudsdfd",
        num:23242
    },
];
//console.log(arr[0].email);
//object ki keys k liye humy 
console.log(Object.keys(tind));
//similarly for values
console.log(Object.values(tind));
//for both  in array
console.log(Object.entries(tind));
//object ki property check krny k liye 
console.log(tind.hasOwnProperty('nme'));
//ho gya



