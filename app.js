// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor Hover Effects for Links and Buttons
const interactables = document.querySelectorAll('a, button, .tag, .stat-card, .project-card, input, textarea');

interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.backgroundColor = 'rgba(212, 163, 115, 0.1)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(42, 33, 24, 0.05)';
        navbar.style.background = 'rgba(253, 251, 247, 0.95)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(253, 251, 247, 0.85)';
    }
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Trigger on load

// Submit Form Handler (Mock)
document.querySelector('.submit-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    const btn = e.target;
    const originalText = btn.innerText;
    
    // Simple validation check
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(!name || !email || !message) {
        alert("Please fill in all required fields (Name, Email, Message)");
        return;
    }

    btn.innerText = "Sending...";
    
    setTimeout(() => {
        btn.innerText = "Message Sent!";
        btn.style.backgroundColor = "#4ade80"; // Green for success
        btn.style.borderColor = "#4ade80";
        document.querySelector('.contact-form').reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "";
            btn.style.borderColor = "";
        }, 3000);
    }, 1500);
});