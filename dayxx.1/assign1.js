
function createNewBlock(){
    try{
        // get the value from box
        let inputPostRef = document.getElementById("post");
        let postValue = inputPostRef.value; 

        if(postValue == ""){
            throw new Error("Text can'nt be empty.");
        }

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


function postImage(fileRef) {
    try{
        let currentFile = fileRef.files[0];
        let fr = new FileReader();

        // this will be called on succesful reading of image file data.
        fr.onload = function(e){
            // QUERY REF BLOCK
            let imgRefBlock = document.getElementById("refBlockImgId");

            // MAKE CLONE
            let cloneImgBlock = imgRefBlock.cloneNode(true);
            cloneImgBlock.style.display = "block";
            cloneImgBlock.removeAttribute("id");

            let imgElem = cloneImgBlock.children[0].children[0].children[0];
            imgElem.src = e.target.result;

            // APPEND TO PARENT
            let parentRef = document.getElementById("parentRefId");
            parentRef.insertBefore(cloneImgBlock, parentRef.firstChild);
        }

        // METHOD CALL TO READ FILE.
        fr.readAsDataURL(currentFile);
    }catch(err){
        console.log(err);
    }
}

function postImageOption2(fileRef) {
    try{
        let currentFile = fileRef.files[0];
            
        // QUERY REF BLOCK
        let imgRefBlock = document.getElementById("refBlockImgId");

        // MAKE CLONE
        let cloneImgBlock = imgRefBlock.cloneNode(true);
        cloneImgBlock.style.display = "block";
        cloneImgBlock.removeAttribute("id");

        let imgElem = cloneImgBlock.children[0].children[0].children[0];
        imgElem.src = URL.createObjectURL(currentFile);

        // APPEND TO PARENT
        let parentRef = document.getElementById("parentRefId");
        parentRef.insertBefore(cloneImgBlock, parentRef.firstChild);

        postImage2Server(currentFile);
    }catch(err){
        console.log(err);
    }
}

function postImage2Server(currentFile) {
    try{
        let formData = new FormData();
        formData.append("imgpost", currentFile, currentFile.name);

        let url = "http://localhost:3006/upload/imgpost";
        $.ajax({
            "url": url,
            "type": "POST",
            "data": formData,
            "contentType": false,
            "processData": false,
            "encType": 'multipart/form-data',
        }).done(function(data, status){
            console.log(data);
            console.log("DONE");
        }).fail(function(jqXhr, status, err){
            console.log(err);
            console.log("FAIL");
        });
    }catch(err){
        console.log(err);
    }
}


function postVideo(fileRef) {
    try{
        let currrentFile = fileRef.files[0];
        let fileURL = URL.createObjectURL(currrentFile);

        let refBlock = document.getElementById("refBlockVideoId");
        
        let cloneBlock = refBlock.cloneNode(true);
        cloneBlock.style.display = "block";
        cloneBlock.removeAttribute("id");

        let videoElem = cloneBlock.children[0].children[0].children[0];
        videoElem.src = fileURL;

        let parentBlock = document.getElementById("parentRefId");
        parentBlock.insertBefore(cloneBlock, parentBlock.firstChild);

    }catch(err){
        console.log(err);
    }
}

