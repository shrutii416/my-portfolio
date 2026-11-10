
// Mobile Navigation
const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.checked = false;
    });
});


// Dark / Light Mode
const themeButton = document.createElement("button");

themeButton.className = "theme-toggle";

themeButton.innerHTML = '<i class="fas fa-moon"></i>';

themeButton.setAttribute("aria-label", "Toggle theme");

document.querySelector(".navbar").appendChild(themeButton);


// Check Saved Theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeButton.innerHTML = '<i class="fas fa-sun"></i>';

}


// Change Theme
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLightMode =
        document.body.classList.contains("light-mode");

    localStorage.setItem(
        "portfolio-theme",
        isLightMode ? "light" : "dark"
    );

    themeButton.innerHTML = isLightMode
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';

});


// Scroll Animation
const revealElements = document.querySelectorAll(
    ".home-content, .home-image, .about-content, .education-card, .skill-card, .project-card, .contact-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


console.log("Portfolio website loaded successfully!");
