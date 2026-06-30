// Admission Form Validation

const form = document.getElementById("admissionForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

if(name.length<3){

alert("Please enter a valid name.");

return;

}

alert("🎉 Thank you! Our admissions team will contact you soon.");

form.reset();

});

}

// FAQ

const questions=document.querySelectorAll(".faq-question");

questions.forEach(question=>{

question.addEventListener("click",()=>{

const answer=question.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}else{

answer.style.display="block";
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){

if(topBtn){

topBtn.style.display="block";

}

}else{

if(topBtn){

topBtn.style.display="none";

}

}

};

if(topBtn){

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}
}

});

});