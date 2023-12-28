/* =====================typing animation==================== */ 
var typed = new Typed(".typing", {
    strings:[ "","Web Designer", " ","Web Developer"],
    typespeed: 100,
    BackSpeed:60,
    loop:true
});
/* ===================Nav style================= */ 
let currentNav = document.querySelectorAll(".nav_list");
 currentNav.forEach( navs =>{
    navs.addEventListener("click",()=>{
        document.querySelector(".active").classList.remove("active");
        navs.classList.add("active");
    })
 })
   