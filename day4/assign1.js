
function createPost() {
    try{
        // GET THE VALUE FROM INPUT
        var postRef = document.getElementById("post");
        var postValue = postRef.value;

        var childElement = document.createElement("div");
        childElement.className = "div2Inner make-center";
        childElement.innerHTML =   postValue;

        childElement.style.background = "linear-gradient(to top right, #FF9800, green)";

        var parentElement = document.getElementById("div2");
        parentElement.insertBefore(childElement, parentElement.firstChild);

        handleNotification();

        // Clear the Text Value
        postRef.value = "";
    }catch(err){
        console.log(err);
    }
}

function handleNotification() {
    var toast = document.getElementById("toast");
    toast.style.display = "block";

    setTimeout(function(){
        toast.style.display = "none";
    }, 2000);
}