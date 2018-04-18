
function hello() {
    console.log("hello Wolrd");
}

function createDyanmicElement() {
    var childElement = document.createElement("div");
    childElement.className = "div2Inner";
    childElement.innerHTML =   new Date();

    var parentElement = document.getElementById("div2");
    //parentElement.appendChild(childElement);
    parentElement.insertBefore(childElement, parentElement.firstChild);

    var toast = document.getElementById("toast");
    toast.style.display = "block";

    setTimeout(function(){
        toast.style.display = "none";
    }, 2000);
}

function createDyanmicElementGradient() {
    try{
        var childElement = document.createElement("div");
        childElement.className = "div2Inner";
        childElement.innerHTML =   new Date();

        childElement.style.background = "linear-gradient(to top right, #FF9800, green)";

        var parentElement = document.getElementById("div2");
        parentElement.insertBefore(childElement, parentElement.firstChild);

        handleNotification();
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