

var circle=document.querySelector(".circle");
var uparrow=document.querySelector(".up-image");
var downarrow=document.querySelector(".down-image");
var rotaeValue=circle.style.transform;
var rotateSum;
uparrow.onclick=function(){
    rotateSum=rotaeValue +"rotate(-90deg)";
    circle.style.transform=rotateSum;
    rotaeValue=rotateSum;
}

downarrow.onclick=function(){
    rotateSum=rotaeValue +"rotate(90deg)";
    circle.style.transform=rotateSum;
    rotaeValue=rotateSum;
}