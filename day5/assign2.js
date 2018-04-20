
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