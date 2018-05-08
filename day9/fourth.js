function XMLHttpRequestDemo(){

    this.readyState = 0;
    this.status = 100;
    this.responseText = "";

    this.open = function() {
        console.log("OPEN");
        this.readyState = 1;
        this.onreadystatechange();
    }

    this.send = function(){
        setTimeout(()=>{
            this.readyState = 2;
            this.onreadystatechange();
        }, 1000);

        setTimeout(()=>{
            this.readyState = 3;
            this.onreadystatechange();
        }, 2000);

        setTimeout(()=>{
            this.readyState = 4;
            this.onreadystatechange();
        }, 3000);
    }
}

function main(){
    try{
        let http = new XMLHttpRequestDemo();
        
        http.onreadystatechange = function(){
            console.log(this.readyState);
        }

        http.open();
        http.send();
    }catch(err){
        console.log(err);
    }
}
main();
