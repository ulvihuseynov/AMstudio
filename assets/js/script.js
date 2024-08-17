 
 const openBtn=document.querySelector(".open-btn");
 const resNavbar=document.querySelector(".res-navbar");
 const closeBtn=document.querySelector(".close-btn");
 openBtn.addEventListener("click",()=>{
resNavbar.style.display='flex'
 })
 closeBtn.addEventListener("click",()=>{
    resNavbar.style.display='none'
     })