/* ==================================================
   CONTACT PAGE
   Author: Alma Chijioke Chaizokam
================================================== */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();

const email = document.getElementById("email").value.trim();

const subject = document.getElementById("subject").value.trim();

const message = document.getElementById("message").value.trim();

if(name==="" || email==="" || subject==="" || message===""){

alert("Please fill in all fields.");

return;

}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email address.");

return;

}

const button = form.querySelector("button");

button.innerHTML =
'<i class="fas fa-check-circle"></i> Message Sent!';

button.style.background="#22C55E";

setTimeout(()=>{

button.innerHTML =
'<i class="fas fa-paper-plane"></i> Send Message';

button.style.background="#2563EB";

form.reset();

},2500);

});