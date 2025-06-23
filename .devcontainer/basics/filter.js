//filter 
//for each values return ni krta lkn jo filter h wo return krta h or filter me hum condtion
//lgaty hn koi b cheez k lye but condtion imp h or ye new array return krta h 
// let nums=[1,2,3,4,5,6,7,8,9];
// nums.filter((num)=>{
//     if(num>4){
//         console.log(num)
//     }
// })
// const newnum=nums.filter((num)=> num>4);
// console.log(newnum);
//ye implicity return k rha 
// const newnum=nums.filter((num)=> { 
//     if(num>4){
//     return num
//     }
// });
// console.log(newnum);
//isi kaam ko ab hum log ofreach se kr k dekhty hn 
// 
// let nums=[1,2,3,4,5,6,7,8,9];
// let numi=nums.forEach((key)=>{
//  if(key>4){
//    // console.log(key)
//    return key
//  }
// })

// console.log(numi);
//ab hum log real example books  ki lety hn 
// let books=[
//     {
//         nme:"meri khani",
//         price:15000,
//     },
//     {
//         nme:"loyality",
//         price:1000,
//     },
//     {
//         nme:"chemist",
//         price:1400,
//     },
//     {
//         nme:"libra",
//         price:1245,
//     }
// ];
// // let pr=books.filter((val)=>val.price<1500);
// let pr=books.forEach((val)=>{
//     if(val.price<1500){
//         console.log( val)
//     }
// })


//ab hum log kry gy map 
//is me condition lgana zruri ni hoti
//is me um mostly operation perform krty hn 
const ghint=[10,20,30,40,50,60,70,80,90];
// const ghnt= ghint.map((num)=>{
//     return num+10;
// })
//ab hum log chaining method apply kry gy 
// const gnht= ghint
//     .map((num)=> num*10 )
//     .map((num)=> num+1)
//     .filter((num)=> num>150)

// console.log(gnht);

//ab hum log kry gy reduce method
// const newly=[1,2,3,4,5,6,7];
// let cnt=newly.reduce((acc,curr)=> acc+curr,0)
// console.log(cnt);

//reduce k liye hum aik shoping cart ki example kry gy 
let cart=[
    {
        book:'js',
        price:5000,
    },
    {
        book:'python',
        price:10000,
    },
    {
        book:'ruby',
        price:12344,
    }


]

const pay=cart.reduce((acc ,curval)=>acc + curval.price ,0)
console.log(pay);

    

