// ==========================================
// PORTFOLIO MAIN JAVASCRIPT
// ==========================================


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        if(menuBtn.innerHTML.includes("bars")){
            menuBtn.innerHTML='<i class="fas fa-times"></i>';
        }
        else{
            menuBtn.innerHTML='<i class="fas fa-bars"></i>';
        }

    });

}


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        if(menuBtn){
            menuBtn.innerHTML='<i class="fas fa-bars"></i>';
        }

    });

});


// ===============================
// STICKY NAVBAR
// ===============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.style.background="rgba(15,23,42,.95)";
        header.style.boxShadow="0 8px 25px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(15,23,42,.75)";
        header.style.boxShadow="none";

    }

});


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        
        // 1. Get the link destination (e.g., "/#projects" or "#projects")
        const href = this.getAttribute("href");
        
        // 2. Extract just the ID part (e.g., "#projects")
        const hash = href.substring(href.indexOf("#"));
        
        // 3. Look for that ID on the current page
        const target = document.querySelector(hash);

        // 4. If the target exists on THIS page, prevent default and smooth scroll
        if (target) {
            e.preventDefault(); 
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
        
        // 5. If the target DOES NOT exist (e.g., you are on the scraping page),
        // we do NOT prevent default. The browser will naturally take you to the home page!
    });
});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.className="scrollTop";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="18px";
topBtn.style.background="#6366f1";
topBtn.style.color="white";
topBtn.style.display="none";
topBtn.style.zIndex="999";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.3)";
topBtn.style.transition=".3s";


window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});


topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});


// ===============================
// IMAGE PARALLAX EFFECT
// ===============================

const heroImage=document.querySelector(".image-wrapper");

window.addEventListener("mousemove",(e)=>{

    if(heroImage){

        const x=(window.innerWidth/2-e.pageX)/40;
        const y=(window.innerHeight/2-e.pageY)/40;

        heroImage.style.transform=`translate(${x}px,${y}px)`;

    }

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("%cWelcome to Sonam's Portfolio ",
"color:#38bdf8;font-size:20px;font-weight:bold;");