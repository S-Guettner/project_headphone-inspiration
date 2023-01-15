let menuPassive = document.getElementById("hamburgerMenuIconPassive");
let menuActive = document.getElementById("hamburgerMenuIconActive");
let hamburgerNav = document.getElementById("hamburgerNav");

menuPassive.addEventListener('click', () =>{
    menuPassive.style.display="none";
    menuActive.style.display="block";
    hamburgerNav.style.display="block";
});

menuActive.addEventListener('click', () =>{
    menuActive.style.display="none";
    menuPassive.style.display="block";
    hamburgerNav.style.display="none";
});


/* ================= contact input ============== */

let emailInput = document.getElementById("emailInput");
let nameInput = document.getElementById("nameInput");
let messageInput = document.getElementById("messageInput");
let newsletter = document.getElementById("newsletterBox");
let button = document.getElementById("button");

button.addEventListener('click', () =>{
    console.log(emailInput.value);
    console.log(nameInput.value );
    console.log(messageInput.value);
    console.log(newsletterBox.checked);
});