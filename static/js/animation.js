// ============================================
//          PORTFOLIO ANIMATIONS
// ============================================


// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

const revealElements = document.querySelectorAll(
".hero-content, .hero-image, .about-container, .timeline-item, .skills-card, .project-card, .certificate-card, .contact-card"
);

function revealOnScroll(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < trigger){

            element.style.opacity="1";
            element.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(element=>{

    element.style.opacity="0";
    element.style.transform="translateY(60px)";
    element.style.transition="all .8s ease";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


// ============================================
// TYPING EFFECT
// ============================================

const role = document.querySelector(".hero-role");

if(role){

const texts=[

"AI Enthusiast",
"Hackathon Participant",
"Python Developer",
"Flask Developer",
"Machine Learning Learner"

];

let textIndex=0;
let charIndex=0;
let deleting=false;

function typing(){

let current=texts[textIndex];

if(!deleting){

role.textContent=current.substring(0,charIndex);

charIndex++;

if(charIndex>current.length){

deleting=true;

setTimeout(typing,1500);

return;

}

}

else{

role.textContent=current.substring(0,charIndex);

charIndex--;

if(charIndex<0){

deleting=false;

textIndex=(textIndex+1)%texts.length;

charIndex=0;

}

}

setTimeout(typing,deleting?50:120);

}

typing();

}


// ============================================
// SKILL BAR ANIMATION
// ============================================

const bars=document.querySelectorAll(".progress-bar");

function animateBars(){

bars.forEach(bar=>{

const width=bar.textContent;

bar.style.width="0";

setTimeout(()=>{

bar.style.width=width;

},400);

});

}

window.addEventListener("load",animateBars);


// ============================================
// COUNTER ANIMATION
// ============================================

const counters=document.querySelectorAll("[data-count]");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.count;

const current=+counter.innerText;

const increment=target/80;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

}

update();

});


// ============================================
// PARALLAX BACKGROUND
// ============================================

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

document.body.style.backgroundPosition=
`${x*40}px ${y*40}px`;

});


// ============================================
// PROJECT CARD TILT
// ============================================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*16;
const rotateX=((y/rect.height)-0.5)*-16;

card.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateX(0) rotateY(0)";

});

});


// ============================================
// BUTTON PULSE
// ============================================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.animate([

{transform:"scale(1)"},

{transform:"scale(1.08)"},

{transform:"scale(1)"}

],{

duration:500

});

});

});


// ============================================
// FLOATING ICONS
// ============================================

document.querySelectorAll(".tech-card i").forEach((icon,index)=>{

icon.style.animation=
`floatIcon 3s ease-in-out ${index*0.2}s infinite`;

});


// ============================================
// GLOW FOLLOW CURSOR
// ============================================

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="#38bdf8";
glow.style.boxShadow="0 0 25px #38bdf8";
glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";
glow.style.top=e.clientY-9+"px";

});


// ============================================
// SCROLL PROGRESS BAR
// ============================================

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.background="linear-gradient(to right,#38bdf8,#6366f1)";
progress.style.width="0";
progress.style.zIndex="9999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

progress.style.width=
(scrollTop/height)*100+"%";

});


// ============================================
// FLOAT ICON KEYFRAME
// ============================================

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatIcon{

0%{transform:translateY(0);}
50%{transform:translateY(-8px);}
100%{transform:translateY(0);}

}

`;

document.head.appendChild(style);


// ============================================
// END
// ============================================

console.log("Animations Loaded Successfully ");