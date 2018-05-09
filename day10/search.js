function home() {
    $("#home").show();
    $("#searchOutput").hide();
}
function updatePage(data){
    try{
        $("#home").hide();
        $("#searchOutput").show();
        for(let i=0;i<data.length;i++){
            let item=data[i];
            
            let parentref=document.getElementById("parent");
            let refBlock=document.getElementById("refBlock");
            let cloneref=refBlock.cloneNode(true);
            cloneref.removeAttribute("id");
            cloneref.style.display="block";

            cloneref.children[0].innerHTML=item.title;
            cloneref.children[2].innerHTML=item.body;

            parentref.appendChild(cloneref);
        }
    }catch(err){
        console.log(err);
    }
}
function ajaxSearch(){
    try{
        let url="https://jsonplaceholder.typicode.com/posts";
        let ref=$.get(url);
        ref.done(function(data){
           // console.log(data);
            updatePage(data);
        })
    }catch(err){
        console.log(err);
    }
}