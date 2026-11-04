document.addEventListener("DOMContentLoaded",function(){
document.querySelectorAll(".current-year").forEach(function(e){e.textContent=new Date().getFullYear()});
const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
if(menu&&nav)menu.addEventListener("click",()=>nav.classList.toggle("open"));
const search=document.getElementById("resource-search");
const cards=[...document.querySelectorAll(".resource-card")];
const buttons=document.querySelectorAll(".filter-btn");
let filter="all";
function update(){
let count=0;const term=search?search.value.toLowerCase():"";
cards.forEach(card=>{
const show=(filter==="all"||card.dataset.category===filter)&&((card.dataset.search+" "+card.textContent).toLowerCase().includes(term));
card.hidden=!show;if(show)count++;
});
const empty=document.getElementById("no-results");if(empty)empty.hidden=count!==0;
}
if(search)search.addEventListener("input",update);
buttons.forEach(b=>b.addEventListener("click",()=>{filter=b.dataset.filter;buttons.forEach(x=>x.classList.toggle("active",x===b));update()}));
const form=document.getElementById("contact-form");
if(form)form.addEventListener("submit",function(e){
e.preventDefault();if(!form.reportValidity())return;
const val=id=>document.getElementById(id).value.trim();
const msg="Hello LearnPro Academy\nName: "+val("contact-name")+"\nEmail: "+val("contact-email")+"\nSubject: "+val("contact-subject")+"\nMessage: "+val("contact-message");
window.open("https://wa.me/8801712936338?text="+encodeURIComponent(msg),"_blank");
});
});
