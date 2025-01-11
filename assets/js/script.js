// Select the header element
const header = document.querySelector("header");
// Select the navbar toggler button
const navbarToggler = document.querySelector(".navbar-toggler");
// Select the element with the ID "toggle_on" (the icon for the menu button)
const toggleOn = document.getElementById("toggle_on");
// Select the element with the ID "toggle_off" (the icon for the close button)
const toggleOff = document.getElementById("toggle_off");
const togglePlayback = document.getElementById("togglePlayback");
const video_ongoing = document.getElementById("ongoing_video")
const nav_links = document.querySelectorAll(".nav-link");

// Toggle the "active" class on navigation links when clicked
nav_links.forEach(link => {
    link.addEventListener("click", () => {
        nav_links.forEach(link => {
            link.classList.remove("active")
        })
        link.classList.add("active")
    })
})

// Add a scroll event listener to manage the header's appearance based on scroll position
window.addEventListener("scroll", () => {
    // If the scroll position is greater than 70
    if(scrollY > 70){
        if(header.clientWidth > 750) {
             // For screens wider than 750px, add specific classes for fixed positioning, padding, and background
            header.classList.add("fixed-top")
            header.classList.add("py-3");
            header.classList.add("bg-black");
            header.classList.add("bg-opacity-75");
        }
        else {
            // For smaller screens, only add the fixed positioning class
            header.classList.add("fixed-top")
        }
    }  else {
        header.classList.remove("fixed-top")
        header.classList.remove("py-3");
        header.classList.remove("bg-black");
        header.classList.remove("bg-opacity-75");
    } 
})

navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("active");
})

let isPlaying = false;
togglePlayback.addEventListener("click",() => {
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");

    isPlaying = !isPlaying;

    start.classList.toggle("d-none", isPlaying);
    stop.classList.toggle("d-block", isPlaying);

    if(isPlaying){
        ongoing_video.play();
        video_ongoing.style.display = "block";
        document.querySelector(".ongoing-events").style.backgroundImage = "initial"
    } else {
        ongoing_video.pause();
    }
})

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.classList.toggle("active");
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: true
            });
        }
    });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
})

sr.reveal(".about .container .left", {delay: 300, distance: "70px", origin: "left"});
sr.reveal(".about .container .right", {delay: 300, distance: "70px", origin: "right"});
sr.reveal(".speaker .card-person, .events .event-content, .pricing .price_card", {delay: 500, interval: 100});
