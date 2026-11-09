
// 1. MOBILE NAVIGATION MENU
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (menuToggle) {
            menuToggle.checked = false;
        }
    });
});


// 2. DARK / LIGHT MODE TOGGLE
const navbar = document.querySelector(".navbar");

if (navbar) {
    const themeButton = document.createElement("button");

    themeButton.className = "theme-toggle";
    themeButton.setAttribute("aria-label", "Toggle light and dark mode");
    themeButton.setAttribute("type", "button");

    themeButton.style.cssText = `
        background: transparent;
        border: 1px solid #c084fc;
        color: #c084fc;
        padding: 10px 13px;
        border-radius: 50%;
        font-size: 18px;
        cursor: pointer;
        margin-left: 15px;
    `;

    navbar.appendChild(themeButton);

    function applyTheme(theme) {
        document.body.classList.toggle("light-mode", theme === "light");

        themeButton.innerHTML = theme === "light"
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

        themeButton.setAttribute(
            "aria-label",
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
        );

        localStorage.setItem("theme", theme);
    }

    // Load previously selected theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    // Change theme on button click
    themeButton.addEventListener("click", () => {
        const currentTheme = document.body.classList.contains("light-mode")
            ? "light"
            : "dark";

        applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
}


// 3. SCROLL ANIMATIONS
const revealElements = document.querySelectorAll(
    ".home-content, .home-image, .about-content, .skill-card, .project-card, .contact-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
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
        element.classList.add("reveal");
        observer.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("show");
    });
}


// 4. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId && targetId.length > 1) {
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});
