// scope
{

}//this bracket is a scope

//var not use bcoz when use it in if or for 
// its goes to functional scope not block or global 
let a=23;
if(true){
    a=33;
}
//let or const function kandr ho to local scope hota
//aghr bhr ho to global scope 

//scope in function 
function one(){
    const userNme="laiba";
    function two(){
        const web=" utube";
        console.log(userNme + web);
    }
    two()
}
one()

//isi trha condtion kA concepth 
if(true){
    const userNme="laib";
    if(userNme==="laib"){
        const utube="indea";
        console.log(userNme+utube);
        console.log(userNme);
    }
   // console.log(utube); ye is liye run ni ho ga ku k scope se bhr h 
}