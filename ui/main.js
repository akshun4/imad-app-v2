console.log('Loaded!');

var element=document.getElementById("main-text");
element.innerHTML="yeah...not really"

//Move the image
var img=document.getElementById("madi");
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10.0;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval= setInterval(moveRight,100);
}