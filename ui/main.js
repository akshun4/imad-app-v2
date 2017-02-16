console.log('Loaded!');

var element=document.getElementById("main-text");
element.innerHTML="yeah...not really"

//Move the image
var img=document.getElementById("madi");
img.onclick=function(){
    img.style.marginLeft = '80px';
}