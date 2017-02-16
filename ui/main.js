console.log('Loaded!');

var element=document.getElementById("main-text");
element.innerHTML="yeah...not really"

//Move the image
var img=document.getElementbyId("madi");
img.onclick=function(){
    img.style.marginLeft = '80px';
}