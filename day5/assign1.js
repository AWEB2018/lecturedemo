
function likeCount() {
    try{
        var likeRef = document.getElementById('like');
        
        // READING THE VALUE
        var likeCountStr = likeRef.innerHTML;
        var likeCount  = parseInt(likeCountStr);
        likeCount += 1;

        // WRITING THE UPDATED VALUE
        likeRef.innerHTML = " " + likeCount;

    }catch(mukeshErr){
        console.log(mukeshErr);
    }
}

function dislikeCount() {
    try{
        let dislikeRef = document.getElementById("dislike");

        let dislikeCountStr = dislikeRef.innerHTML;
        let dislikeCount = parseInt(dislikeCountStr);
        dislikeCount += 1;

        dislikeRef.innerHTML = " " + dislikeCount;
    }catch(err){
        console.log(err);
    }
}