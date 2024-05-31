//hamberger element{}

const openBtn=document.querySelector(".fa-bars-staggered");
const closeBtn=document.querySelector(".fa-angle-up");
const headerElem=document.querySelector("header")

openBtn.addEventListener("click",(e)=>{
    console.log(e)
    headerElem.classList.add("hamberger");
});

closeBtn.addEventListener("click",(e)=>{
    headerElem.classList.remove("hamberger");
});

