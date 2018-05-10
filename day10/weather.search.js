function ajaxSearch() {
    try{
        let inputValue=$("#inputId").val();
        inputValue = inputValue || "MUMBAI";
        
        $("#inputId").val(inputValue);

        let APPID = "7023923dd26a725da995c75b65864de5";
        
        let url = "http://api.openweathermap.org/data/2.5/forecast"
        let inputData = {"q" : inputValue, "APPID": APPID, "units":"metric"};
        
        //let url = "http://api.openweathermap.org/data/2.5/forecast"
        //url += "?q=mumbai&appid=7023923dd26a725da995c75b65864de5";
        let jqxhr = $.get(url, inputData);

        jqxhr.done(function(data){
            //console.log(data);
            paintPage(data);
        });

        jqxhr.fail(function(xhr, status, err){
            console.log(err);
            alert("INVALID INPUT");
        });

    }catch(err){
        console.log(err);
    }
}
function paintPage(data){
    try{
        for(let i=0;i<data.list.length;i++)
        {
            let items=data.list[i];

            let refblock=document.getElementById("refblock");
            let clone=refblock.cloneNode(true);
            clone.removeAttribute("id");
            clone.style.display="block";

            clone.children[0].children[0].innerHTML=items.main.temp_max;

            let parent=document.getElementById("parent");
            parent.insertBefore(clone,parent.firstChild);

        }
    
    }catch(err)
    {
        console.log(err);
    }
}


// DEFAULT CALL
// ajaxSearch(); // PROBLEM :: DOCUMENT IS NOT READY
$(document).ready(function(){
   // ajaxSearch();
});