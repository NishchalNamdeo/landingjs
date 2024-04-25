var header = document.getElementById("header");

var ms = document.getElementById("PORSCHE");
var m3 = document.getElementById("AUDI");
var mx = document.getElementById("BMW");
var my = document.getElementById("MERCEDES");
var model = document.getElementById("model");
var mph = document.getElementById("mph");
var speed = document.getElementById("speed");
var range = document.getElementById("range");


ms.onclick=function(){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
    model.innerHTML="PORSCHE";
    mph.innerHTML="1.5s";
    speed.innerHTML="300 mph";
    range.innerHTML="400 mi";
}
m3.onclick=function(){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
    model.innerHTML="AUDI";
    mph.innerHTML="1.7s";
    speed.innerHTML="350 mph";
    range.innerHTML="500 mi";
}
mx.onclick=function(){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
    model.innerHTML="BMW";
    mph.innerHTML="2.5s";
    speed.innerHTML="420 mph";
    range.innerHTML="450 mi";
}
my.onclick=function(){
    header.style.backgroundImage="url(https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
    model.innerHTML="MERCEDES";
    mph.innerHTML="3.5s";
    speed.innerHTML="450 mph";
    range.innerHTML="350 mi";
}