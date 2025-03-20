// Toggle Menu (for mobile view)
const toggleMenu = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');

toggleMenu.addEventListener('click', () => {
    // Toggle visibility of mobile menu
    menu.classList.toggle('hidden');
    menu.classList.toggle('max-h-0');  // Hide menu initially with max-height 0
    menu.classList.toggle('max-h-screen'); // Set max-height to screen size when menu is visible

    // Toggle hamburger and close icon
    if (menu.classList.contains('max-h-screen')) {
        toggleMenu.innerHTML = '&#10006;';  // Close icon
    } else {
        toggleMenu.innerHTML = '&#9776;';  // Hamburger icon
    }
});

// Live Clock Function
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Call initially

// Active Link Highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

// Function to handle active link change (Scroll-Based)
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
            link.classList.add("active"); // Add active to the current section
        }
    });
}

// ✅ Manually update active link when clicked
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("active")); // Remove active from all
        this.classList.add("active"); // Add active to clicked link
    });
});

// Event listener to trigger on scroll
window.addEventListener("scroll", handleActiveLink);

// Ensure active link is updated on page load
window.onload = function () {
    typeWriter(); // Start typing effect
    handleActiveLink(); // Update active link when the page loads
};

// Typewriter effect
const text = ["Data Scientist", "ML Specialist", "Tech Enthusiast"];
let index = 0;
let i = 0;
let speed = 100;

function typeWriter() {
    if (i < text[index].length) {
        document.getElementById("dynamic-text").innerHTML += text[index].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if (i >= 0) {
        document.getElementById("dynamic-text").innerHTML = text[index].substring(0, i);
        i--;
        setTimeout(eraseText, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typeWriter, 500);
    }
}

// Terminal-like log output
document.addEventListener("DOMContentLoaded", function () {
    const outputDiv = document.getElementById("hacker-output");
    const logs = [
        "[AI-System] Initializing neural network...",
        "[AI-Model] Training epoch 12/50...",
        "[Security] Intrusion detected - running countermeasures...",
        "[Server] GPU acceleration enabled...",
        "[NLP] Sentiment analysis completed...",
        "[ML-Pipeline] Data preprocessing  ✅",
        "[Deep Learning] Backpropagation in progress...",
        "[Encryption] AES-256 encryption successful...",
        "[Database] Query executed in 0.032s",
        "[AI] Self-learning module activated..."
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

// Tabs Functionality
function showTab(tabId) {
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
    showTab('education');
});
