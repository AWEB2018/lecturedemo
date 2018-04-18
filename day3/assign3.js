function createBlock1(){
    var childElement=document.createElement('div');
    childElement.className="sec2child";
    childElement.innerHTML= "'If you can change your mind, you can change your life.'";
    
    var parentElement=document.getElementById("parent");
    //parentElement.appendChild(childElement);
    parentElement.insertBefore(childElement,parentElement.firstChild);

    displayNotifi();
}

function displayNotifi(){
    var toast= document.getElementById("notify");
    toast.style.display="block";
    
    setTimeout(() => {
    toast.style.display="none";    
    }, 5000);

}