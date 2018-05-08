let str = "HELLO CDAC";

let refMethod =  function(){
    try{
        console.log("FUNCTION!!!!");
    }catch(err){
        console.log(err);
    } 
};


function helloWorld() {
    try{
        console.log("Hello World!!!");
    }catch(err){
        console.log(err);
    }
}

try{
    console.log(typeof str);
    console.log(typeof refMethod);
    
    //str();
    refMethod();
}catch(err){
    console.log(err);
}

