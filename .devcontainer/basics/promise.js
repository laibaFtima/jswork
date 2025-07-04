//promisee
let firstPromise=new Promise(function(resolve,reject){
    setTimeout( function(){
        console.log('first promsie resolve')
        resolve()
    },1000)
})
firstPromise.then(function(){
    console.log('ho gyaa')
})
let rslv=function(){
    console.log('ho gya');
}
//ab aik step or agy bhry gy prmise se related
new Promise(function(resolve,reject){
    let func=function(){
        console.log('dusri approch');
        resolve();
    }
    setTimeout(func,1000)
}).then(rslv);
//ab hum aik or step ay bhry gy 
let third= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({nme:'laiba', amr:"amaar"})
    },1000)
})
third.then(function(user){
    console.log(user);
})
//agla promise 

let four=new Promise(function(resolve,reject){
    let error=false;
    if(!error){
        resolve({nme:'hitesh',num:'123'})
    }else{
        reject('error not found')
    }
})
four.then(function(user){
 console.log(user);
 return(user.num);
}).then(function(mynme){
    console.log(mynme)
}).catch(function(err){
    console.log(err)
}).finally(()=>console.log('promise is oslve or not'));
let five=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
    if(!error){
        resolve({nme:'zianba',num:'123'})
    }else{
        reject('error not found')
    }
    },1000)
});

async function consumefive() {
 try {
     const response =await five
     console.log(response)
 } catch (error) {
     console.log(error);
 }
}
consumefive();
