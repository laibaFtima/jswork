// //for of loop
// const arr=[1,2,3,4,5];
// for(const num of arr){
//   console.log(num);
// }
// const greeting="hello prettie";
// for(const greet of greeting){
//     console.log(greet);
//     if(greet===" ")
//     {
//         console.log("there is space");
//         break
//     }
// }

// //maps method
// let student= new Map();
// student.set("name","laiba");
// student.set("lackof","akal");
// student.set("issue","trust everyone");
// student.set("heart","broken");
// student.set("feel","lonely");
// // console.log(student.get("name"));
// for(const [key,vl] of student)
// {
//     console.log(key,":",vl);
// }

// //now check for of loop in object 
// let obj={
//     "li":"dkskl",
//     "khu":"skd",
//     "sk":"sodks",
// }
// for(const key in obj){
//     console.log(`${key} is key of ${obj[key]} `);
// }
// //for of not work in object

// //ab  hum log ofr in ka use array me kr k dekhty hn 
// let arr1=["sds","wdf","rrg","ase"];
// for(const key in arr1){
//     console.log(arr1[key]);
// }
//array ki keys bulit in hoti hn 
//for in Map me work ni kry ga

//ab bari h for each ki 
//for each me hum aik function callback use krty hn 
let coding=['js','py','cpp','swift'];
// coding.forEach( function(val){
//     console.log(val);
// })
//we can also use arrow function
// coding.forEach( (val)=>{
//     console.log(val);
// })
// function meet(key){
//  console.log(key);
// }
// coding.forEach(meet);
//function ka bs reffernece dena execute ni krna khudi sb ho jy ga
// coding.forEach((item ,index , array)=>{
//     console.log(item,index,array);
// })
let or=[
    {
        nme:"sfd",
        ler:"sdf"

    },
    {
        nme:"dfdg",
        oe:"dsd",
    },
    {
        nme:"cd",
        osd:"dfb",
    }
]
or.forEach((key)=>{
    console.log(key.nme);
})
//aj k liye itny hi loop krny thy ho gy