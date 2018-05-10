function hello(){
    try{
        console.log("HELLO WORLD");
    }catch(err){
        console.log(err);
    }
}


hello();
hello(1);
hello(1, 2);