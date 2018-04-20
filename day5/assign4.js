
function createNewBlock(){
    try{
        let refBlock = document.getElementById("refBlockId");

        let cloneRefBlock = refBlock.cloneNode(true);
        cloneRefBlock.style.display = "block";
        cloneRefBlock.removeAttribute("id");

        let parentRef = document.getElementById("parentRefId");
        let childCount = parentRef.children.length;
        let bgClass = (childCount%2 == 0)? "bg-info" : "bg-warning";

        let allClass = cloneRefBlock.children[0].className;
        allClass += " " + bgClass;
        cloneRefBlock.children[0].className = allClass;    

        parentRef.insertBefore(cloneRefBlock, parentRef.firstChild);

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


function fileSelected(fileRef){
    try{
        if (fileRef.files && fileRef.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var tempImgRef = document.getElementById("tempImgId");
                tempImgRef.setAttribute("src", e.target.result);
                tempImgRef.style.height = "300px";
                tempImgRef.style.width = "50%";

            };

            reader.readAsDataURL(fileRef.files[0]);
        }
    }catch(err){
        console.log(err);
    }
};