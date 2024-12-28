const header = document.querySelector("header");
const navbarToggler = document.querySelector(".navbar-toggler")
const toggleOn = document.getElementById("toggle_on")
const toggleOff = document.getElementById("toggle_off")

window.addEventListener("scroll", () => {
    if(scrollY > 70){
        header.classList.add("fixed-top")
        header.classList.add("py-3");
        header.classList.add("bg-black");
        header.classList.add("bg-opacity-75");
    }  else {
        header.classList.remove("fixed-top")
        header.classList.remove("py-3");
        header.classList.remove("bg-black");
        header.classList.remove("bg-opacity-75");
    } 
})

navbarToggler.addEventListener("click", () => {
    console.log("ad")
    navbarToggler.classList.toggle("active");
})