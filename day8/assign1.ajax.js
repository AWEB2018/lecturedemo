function helloAjax(){
    try{
        // STEP-1
        let http = new XMLHttpRequest();

        // STEP-4 EVENT HANDLER :: run()
        http.onreadystatechange = function(){
            if(http.readyState == 4){
                let resString = http.responseText;
                let resJson = JSON.parse(resString); // jQuery/ANGULAR

                //console.log(resString);
                //console.log(resJson);

                for(let i=0; i<resJson.length; i++){
                    let item = resJson[i];
                    updateWebPage(item);
                }
            }
        }

        // STEP-2
        let url = "https://jsonplaceholder.typicode.com/posts";
        http.open("GET", url, true);

        // STEP-3
        http.send();
    }catch(err){
        console.log(err);
    }
}

function helloAjaxUsingJQuery(){
    try{
        let url = "https://jsonplaceholder.typicode.com/posts";
        
        let jqhr = $.get(url);
        jqhr.done(function(data){
            for(let i=0; i<data.length; i++){
                let item = data[i];
                updateWebPage(item);
            }
        });

    }catch(err){
        console.log(err);
    }
}


function updateWebPage(resJson){
    try{
        // REFERENCE BLOCK
        let refBlock = document.getElementById("refBlockId");

        let cloneRefBlock = refBlock.cloneNode(true);
        cloneRefBlock.style.display = "block";
        cloneRefBlock.removeAttribute("id");

        // SET DYNAMIC VLAUE
        cloneRefBlock.children[0].children[0].innerHTML = resJson.title;

        let parentRef = document.getElementById("parentRefId");
        parentRef.insertBefore(cloneRefBlock, parentRef.firstChild);
    }catch(mukeshErr){
        console.log(mukeshErr);
    }
}