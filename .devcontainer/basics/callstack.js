//execution process
//JEC js exectuion context
//three types of execution context
//global EC  //browser ka window object hota or node ka khali object
//eval EC 

//hr code k 3 phase hoty hn 
// memory creation phase  and execution phase
//1st step jo b code ho wo global execution se run hota h 
//phr is ko allocate kiya jata h this k undr 
//phr memmory phse ata jis me variables ko memory allocate ki jati h 
//memroy me jo variabels ho gy un ki value phly undefined ho gi pr function me us ki defintion
//ho gi undefined ni 
// now next phase execution ho ga or phr valus di jy gi variables ko 
//jo b value return ho gi wo global EC me jy gi 


//example 
let val1=10;  //mmeroy me undefined ho gi value
let val2=5;   //is ka b same yehi ho ga
function sum(num1 , num2){    //memory me function ki defition
 return num1+num2;
}
let result1=sum(val1 , val2);  //ab functin call ho ga to function ka aik or box bny ga phr us me meory of excution is k seprate box bny gy 
let result2=sum(10,2);  //is ka b yei ho ga 
//function run hony kbaad in k box del ho jy gy 


//ab bari h call stack ki  
// call stack me phly global EC 
//phr jo function call kiya yaa jo b h us ka box phase stack me jy ga aghr functino to wo 
//or bhr sb se phly wo jy ga jo sb se last me gya 
