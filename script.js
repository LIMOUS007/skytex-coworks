// Smooth scrolling
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize Google Maps
function initMap() {
    var location = { lat: 28.7041, lng: 77.1025 }; // Replace with actual location
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location
    });
    new google.maps.Marker({
        position: location,
        map: map
    });
}
document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("transparent");
        } else {
            navbar.classList.remove("transparent");
        }
    });
});
