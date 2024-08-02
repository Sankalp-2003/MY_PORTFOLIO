

function navAnimation(){
  let nav = document.querySelector('nav');
let TargetH1 = document.querySelector('.left-container h1');

window.addEventListener('scroll',()=>{
  const h1Position = TargetH1.getBoundingClientRect().top;
  if(h1Position <= 50){
    nav.classList.add('scrolled');
  }else{
    nav.classList.remove('scrolled');
  }
})

document.getElementById('home').addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth',
  })
})

let MySkill = document.querySelector('.Myskills')
document.getElementById('skills').addEventListener('click',()=>{
  MySkill.scrollIntoView({
    behavior:'smooth'
  })
})

let MyWorks = document.querySelector('.Myworks')
document.getElementById('works').addEventListener('click',()=>{
  MyWorks.scrollIntoView({
    behavior:'smooth'
  })
})

let Contacts = document.querySelector('.contacts')
document.getElementById('contact').addEventListener('click',()=>{
  Contacts.scrollIntoView({
    behavior:'smooth'
  })
})

document.getElementById('contactMe').addEventListener('click',()=>{
  Contacts.scrollIntoView({
    behavior:'smooth'
  })
})

}
navAnimation();

function Page2Animation(){
  let htmlHr = document.querySelector('.html-hr');
let cssHr = document.querySelector('.css-hr');
let jsHr = document.querySelector('.js-hr');
let gsapHr = document.querySelector('.gsap-hr');
let tailwindHr = document.querySelector('.tailwind-hr');
let html = 0;
let css = 0;
let js = 0;
let gsap = 0;
let tailwind = 0;
let functionActivated = false;
function updateHtml(){
  htmlHr.style.width = html +'%';
  html++;
  if(html < 91){
    setTimeout(updateHtml, 20);
  }
}


function updateCss(){
  cssHr.style.width = css +'%';
  css++;
  if(css < 80){
    setTimeout(updateCss, 20);
  }
}


function updatejs(){
  jsHr.style.width = js +'%';
  js++;
  if(js < 70){
    setTimeout(updatejs, 20);
  }
}


function updategsap(){
  gsapHr.style.width = gsap +'%';
  gsap++;
  if(gsap < 55){
    setTimeout(updategsap, 20);
  }
}


function updatetailwind(){
  tailwindHr.style.width = tailwind +'%';
  tailwind++;
  if(tailwind < 50){
    setTimeout(updatetailwind, 20);
  }
}


let page2Para = document.querySelector('.page2 p');
let SkillContainer = document.querySelector('.pag2-content');

window.addEventListener('scroll',()=>{
  let paraPosition = page2Para.getBoundingClientRect().top;
  if(paraPosition < 300 && !functionActivated){
    functionActivated = true;
    SkillContainer.style.opacity = 1;
    
    updateHtml();
    updateCss();
    updatejs();
    updategsap();
    updatetailwind();
  }
})
}
Page2Animation();

let Lp = document.querySelector('.lp');
Lp.addEventListener('click',()=>{
  window.location.href = 'LandingPage.html';
})

let Aw = document.querySelector('.aw');
Aw.addEventListener('click',()=>{
  window.location.href = 'aw.html';
})

let Mp = document.querySelector('.mp');
Mp.addEventListener('click',()=>{
  window.location.href = 'mp.html';
})


function Send(){
  var phonenumber = "+917019489270";
  var name = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var textarea = document.querySelector('#textarea').value;

  var url = "https://wa.me/" + phonenumber + "?text=" +"Name :" +name+"%0a" +"Email :" +email+"%0a" +"Message :" +textarea+"%0a%0a";

  window.open(url, '_blank').focus();
}





