/* ==================================================
   ABOUT PAGE JAVASCRIPT
   Author: Alma Chijioke Chaizokam
   Project: COS106 Student Portfolio
================================================== */


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
"section, .fact-card, .strength-card, .cert-card, .hobby-card, .timeline-item"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(element=>{

    element.classList.add("fade-up");

    observer.observe(element);

});


/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = Number(counter.dataset.target);

let count = 0;

const speed = 40;

const updateCounter = ()=>{

if(count < target){

count++;

counter.innerText = count;

setTimeout(updateCounter,speed);

}

else{

counter.innerText = target + "+";

}

}

updateCounter();

counterObserver.unobserve(counter);

}

});

},{
threshold:.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================
   PROGRESS BAR ANIMATION
========================================== */

const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bar = entry.target;

const width = bar.style.width || window.getComputedStyle(bar).width;

bar.style.width = "0";

setTimeout(()=>{

bar.style.width = width;

},200);

}

});

},{
threshold:.4
});

progressBars.forEach(bar=>{

progressObserver.observe(bar);

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});


/* ==========================================
   BUTTON HOVER EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


/* ==========================================
   FOOTER YEAR
========================================== */

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
`© ${year} Alma Chijioke Chaizokam. All Rights Reserved.`;

}