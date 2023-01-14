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