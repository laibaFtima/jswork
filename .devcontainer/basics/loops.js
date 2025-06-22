// //loops
// for (let index = 0; index < 20; index++) {
//     console.log(index);
    
// }
// //ye to basic tha
// for(let i=0;i<10;i++){
//     console.log(`values ${i}`)
//     if(i==5){
//         console.log(`${i} is dedected`);
//     }
// }
// //nesting loop
// for(let i=1;i<=10;i++){
//     console.log(`table of ${i}`)
//     for(let j=1;j<=10;j++){
//       console.log(`table of ${i}*${j}`,i*j);
//     }
// }
 
// //ab arrays me work kr k kry gy 
// let myHero=["hulk","quaid","super","duper"]
// for(let i=0;i<myHero.length;i++){
//     console.log(`index of ${myHero} is ${i}`);
// }
// //ab continue or break ko kry gy 

// for (let index = 0; index < 10; index++) {
//     console.log(`value of index is ${index}`);
//     if(index==5){
//         console.log("5 is dedected");
//         break;
//     }
    
// }
// //ab kry gy contiue
// for (let index = 0; index < 10; index++) {
//     console.log(`value of index is ${index}`);
//     if(index==5){
//         console.log("5 is dedected");
//         continue;
//     }
    
// }
//while and do while

let hitesh=0;
while(hitesh<11){
    console.log(`value of ${hitesh}`);
hitesh=hitesh+2;
}
let hro=["eefe","were","erfedrf","sdrfe"]
let arr=0
while (arr<hro.length){
    console.log(`value of ${hro[arr]}`)
    arr++;
}
let score=10
do{
    console.log(`socre is ${score}`);
    score++;
}while(score<50);