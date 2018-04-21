
function createNewBlock(){
    try{
        // get the value from box
        let inputPostRef = document.getElementById("post");
        let postValue = inputPostRef.value; 

        // REFERENCE BLOCK
        let refBlock = document.getElementById("refBlockId");

        let cloneRefBlock = refBlock.cloneNode(true);
        cloneRefBlock.style.display = "block";
        cloneRefBlock.removeAttribute("id");

        // SET DYNAMIC VLAUE
        cloneRefBlock.children[0].children[0].innerHTML = postValue;

        let parentRef = document.getElementById("parentRefId");
        parentRef.insertBefore(cloneRefBlock, parentRef.firstChild);

        // CLEAR THE TEXT
        inputPostRef.value = "";
    }catch(mukeshErr){
        console.log(mukeshErr);
    }
}

function likeCount(btnElemRef) {
    try{
        console.log(btnElemRef);
        let firstChild = btnElemRef.children[0];

        let likeCountStr = firstChild.innerHTML;
        let likeCount = parseInt(likeCountStr);

        likeCount += 1;

        firstChild.innerHTML = " " + likeCount;

    }catch(mukeshErr){
        console.log(mukeshErr);
    }
}

function dislikeCount() {
    try{
        console.log(btnElemRef);       
    }catch(err){
        console.log(err);
    }
}