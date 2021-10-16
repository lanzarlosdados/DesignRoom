const btnMenu= document.querySelector("#btn_menu");
const navMenu= document.querySelector("#nav_menu");

btnMenu.addEventListener("click",function(){
   navMenu.classList.toggle("mostar"); 
});