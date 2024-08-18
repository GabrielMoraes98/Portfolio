const navbar = document.querySelector(".navbar")
const modeIcon = document.querySelectorAll(".mode-icon")
const body = document.getElementById("body")
const mobileNavbar = document.querySelector('.navbar-mobile');
const button = document.querySelector('.burguer');
button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
    const links = document.querySelectorAll(".nav-link")
    links.forEach(link => {
        link.addEventListener("click",()=>{
            console.log(link);
            mobileNavbar.classList.remove('active');
        })
    });
  });
  modeIcon.forEach(icon => {
        icon.addEventListener("click", ()=>{
            icon.classList.toggle("fa-moon")
            icon.classList.toggle("fa-sun")

    if (icon.classList.contains("fa-sun")) {
        body.classList.add("noturno")
    }else{
        body.classList.remove("noturno")
    }
        })
  });
window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
  });

  var typed = new Typed(".escrever-texto", {
    strings: ["Desenvolvedor Front End"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});