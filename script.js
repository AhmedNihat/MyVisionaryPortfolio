// Toggle Menu (for mobile view)
document.getElementById("toggleMenu").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    let menuIcon = document.getElementById("menuIcon");

    if (menu.classList.contains("translate-x-full")) {
        menu.classList.remove("translate-x-full", "opacity-0");
        menu.classList.add("translate-x-0", "opacity-100");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times"); // Animate to 'X'
    } else {
        menu.classList.remove("translate-x-0", "opacity-100");
        menu.classList.add("translate-x-full", "opacity-0");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars"); // Animate back to '☰'
    }
});

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", function() {
        let menu = document.getElementById("menu");
        let menuIcon = document.getElementById("menuIcon");
        menu.classList.remove("translate-x-0", "opacity-100");
        menu.classList.add("translate-x-full", "opacity-0");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    });
});

// Active Link Highlighting (scroll-based)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

// Function to handle active link change
function handleActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active"); // Remove active from all
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active"); // Add active to current section
        }
    });
}

// Event listener to trigger on scroll
window.addEventListener("scroll", handleActiveLink);

// Ensure active link is updated on page load
window.onload = function () {
    handleActiveLink(); // Update active link when the page loads
};





// Typewriter effect for dynamic text with cyberpunk colors
const textArray = [
    { text: "Data Scientist", color: "#00FFFF" },  // Neon Cyan
    { text: "ML Specialist", color: "#FF00FF" },  // Neon Magenta
    { text: "Tech Enthusiast", color: "#FFFF00" } // Neon Yellow
];

let index = 0;
let i = 0;
let speed = 100;

function typeWriter() {
    if (i < textArray[index].text.length) {
        const dynamicText = document.getElementById("dynamic-text");
        dynamicText.innerHTML += textArray[index].text.charAt(i);
        dynamicText.style.color = textArray[index].color; // Apply cyberpunk color
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if (i >= 0) {
        const dynamicText = document.getElementById("dynamic-text");
        dynamicText.innerHTML = textArray[index].text.substring(0, i);
        i--;
        setTimeout(eraseText, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeWriter, 500);
    }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", typeWriter);

// Logs with typewriter effect (Hacker-like output)
document.addEventListener("DOMContentLoaded", function () {
    const outputDiv = document.getElementById("hacker-output");
    const logs = [
        "Initializing system...",
        "Loading modules...",
        "Fetching data...",
        "Access granted.",
        "....",
        "Welcome to Ahmed Ullah Nihat's Data World!",
        "!!!"
    ];

    function typeLog(log) {
        return new Promise((resolve) => {
            let index = 0;
            const interval = setInterval(() => {
                outputDiv.innerHTML += log[index];
                index++;
                if (index === log.length) {
                    clearInterval(interval);
                    outputDiv.innerHTML += "<br>";
                    resolve();
                }
            }, 50);
        });
    }

    async function startTyping() {
        while (true) {
            outputDiv.innerHTML = ""; // Clear old logs
            for (let log of logs) {
                await typeLog(log);
                await new Promise((resolve) => setTimeout(resolve, 800));
            }
        }
    }

    startTyping();
});





// Tab navigation (Show the selected tab)
function showTab(tabId, event) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active-tab');
    });

    // Show selected tab
    document.getElementById(tabId).classList.remove('hidden');

    // Add active class to clicked button
    event.target.classList.add('active-tab');
}

// Show Education tab by default
document.addEventListener("DOMContentLoaded", () => {
    // Show Education tab by default
    showTab('education');
});

// Listen for tab clicks to set active class
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active-tab class from all buttons
            tabButtons.forEach(btn => btn.classList.remove("active-tab"));
            
            // Add active-tab class to the clicked button
            this.classList.add("active-tab");
        });
    });
});

// Automatic image flipping for the card
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '/assets/Nihat1.png',
        '/assets/Nihat2.png'
    ];

    let currentIndex = 0;
    const flipCardInner = document.getElementById('flip-card-inner');
    const frontImage = flipCardInner.querySelector('.flip-card-front img');
    const backImage = flipCardInner.querySelector('.flip-card-back img');

    function flipImage() {
        const nextIndex = (currentIndex + 1) % images.length;

        // Update back image source before flipping
        backImage.src = images[nextIndex];

        // Apply flip animation
        flipCardInner.style.transform = 'rotateY(180deg)';

        // After animation, swap front image and reset flip
        setTimeout(() => {
            frontImage.src = images[nextIndex];
            flipCardInner.style.transform = 'rotateY(0deg)';
            currentIndex = nextIndex;
        }, 800); // Match with CSS transition
    }

    // Automatically flip image every 3 seconds
    setInterval(flipImage, 3000);
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents actual form submission
    document.getElementById("formMessage").classList.remove("hidden"); // Shows success message
    setTimeout(() => {
        document.getElementById("formMessage").classList.add("hidden"); // Hides message after 3 sec
    }, 3000);
    this.reset(); // Clears form fields
});


document.addEventListener("DOMContentLoaded", function () {
    const verticalElements = document.querySelectorAll(".hidden-element-vertical");
    const horizontalElements = document.querySelectorAll(".hidden-element-horizontal");
    const rtlElements = document.querySelectorAll(".hidden-element-rtl");
    const flipElements = document.querySelectorAll(".hidden-element-flip");
    const popElements = document.querySelectorAll(".hidden-element-pop");  // Select pop elements

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("hidden-element-vertical")) {
                        entry.target.classList.add("show-element-vertical");
                    }
                    if (entry.target.classList.contains("hidden-element-horizontal")) {
                        entry.target.classList.add("show-element-horizontal");
                    }
                    if (entry.target.classList.contains("hidden-element-rtl")) {
                        entry.target.classList.add("show-element-rtl");
                    }
                    if (entry.target.classList.contains("hidden-element-flip")) {
                        entry.target.classList.add("show-element-flip");
                    }
                    if (entry.target.classList.contains("hidden-element-pop")) {
                        entry.target.classList.add("show-element-pop");
                    }
                } else {
                    if (entry.target.classList.contains("hidden-element-vertical")) {
                        entry.target.classList.remove("show-element-vertical");
                    }
                    if (entry.target.classList.contains("hidden-element-horizontal")) {
                        entry.target.classList.remove("show-element-horizontal");
                    }
                    if (entry.target.classList.contains("hidden-element-rtl")) {
                        entry.target.classList.remove("show-element-rtl");
                    }
                    if (entry.target.classList.contains("hidden-element-flip")) {
                        entry.target.classList.remove("show-element-flip");
                    }
                    if (entry.target.classList.contains("hidden-element-pop")) {
                        entry.target.classList.remove("show-element-pop");
                    }
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    verticalElements.forEach((element) => {
        observer.observe(element); // Observe vertical elements
    });
    horizontalElements.forEach((element) => {
        observer.observe(element); // Observe horizontal elements
    });
    rtlElements.forEach((element) => {
        observer.observe(element); // Observe right-to-left elements
    });
    flipElements.forEach((element) => {
        observer.observe(element); // Observe flip elements
    });
    popElements.forEach((element) => {
        observer.observe(element); // Observe pop elements
    });
});

