var menu=document.querySelector(".menu");
var navlist=document.querySelector(".navlist");
var link=document.querySelector(".navlist li");

menu.addEventListener("click",function(){
    this.classList.toggle("click");
    navlist.classList.toggle("clicked");
});

function check(e){
    menu.classList.toggle("click");
    navlist.classList.toggle("clicked");
}
