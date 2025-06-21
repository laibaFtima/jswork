//conditions
//sara code hum ni chahty aik sath sara hi ho to condition use kr 
//means kn sa code kb exectuee ho to is liye conditions lgaty 
if(2>=3){
    console.log("seek mathematics");
}
else{
    console.log("no u r worng");
}

//implicit way of scope is like
let user=true;
if(user==true) console.log("yeah u r true");
//but ye treeqa zyada use ni hota 

//now nesting ocnditions
let jan="mother";
if(jan=="brother"){
    console.log("sibling");
}else if(jan=="sister"){
    console.log("pr se sibling");
}else if(jan=="father"){
    console.log("this is father");
}else if(jan=="mother"){
    console.log("yeah u  r correct");
} else{
    console.log("no relation ")
}
//8 logical operator
//var global ho ga scope brackets me b that's why we use let and const

//now we are doing multiple condition code
  //&& ampresend sigen is adn operator
let userNme="laba";
let password="123";
if(userNme=="laiba" && password=="123"){
    console.log("successfully loged in")
}else{
    console.log("worng password");
}

// or operator || 


let card="1232";
let balance="455";
if(card=="1232" || balance=="323"){
    console.log("yes you can buy");
}

//switch
//ratings kl iye hum bar bar condition likhny se avoid k liye hum switch use krty hn 
let mnth="august"
switch (mnth) {
    case "jan":
        console.log("wrong")
        break;
    case "may":
        console.log("deathday")
        break;
         case "august":
        console.log("birthday")
        break;
    default:
        console.log("not a day")
        break;
}

//now falsy and truthy values
//falsy

// false , 0 ,-0 ,"",BigInt 0n , null , undefined ,NaN
//truthy
//"0", "false"," ",{},[] , function(){}
let usr="";
if(usr) 
    {
        console.log("yeah u r true");

    }
    else{
        console.log("not valid")
    }

    let obj={}
    if(Object.keys(obj).length===0){
        console.log("no more keys")
    }
//nullish coalescing operator (??) work for: null , undefined
let val1;
val1 =null??10;

console.log(val1)

//now m done and i can do any thing what i want Allah is with me 
//i don't need any body Allah is with me and it's enough for me 