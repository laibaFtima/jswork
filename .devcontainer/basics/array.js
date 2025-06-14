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
console.log(Array.isArray("laiba"));// ye poochny k liye k ye array h yaa ni 
console.log(Array.from("mlaika")); //array me convert krny k liye 
console.log(Array.from({
    name:"laiba",
}))// is trha se khali object de ga menion krna pry ga key yaa values ki array bnani 
let s1=3433;
let s2=34343;
let s3=343;
console.log(Array.of(s1,s2,s3));