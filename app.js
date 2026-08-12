const roleElements = document.querySelectorAll('.role');

if (roleElements.length) {
    let activeRoleIndex = 0;

    setInterval(() => {
        roleElements.forEach((role, index) => {
            role.classList.toggle('active', index === activeRoleIndex);
        });

        activeRoleIndex = (activeRoleIndex + 1) % roleElements.length;
    }, 2000);
}

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

// Submit Form Handler
const contactForm = document.querySelector('.contact-form');
const submitBtn = document.querySelector('.submit-btn');

submitBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const btn = e.target;
    const originalText = btn.innerText;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all required fields (Name, Email, Message)');
        return;
    }

    btn.innerText = 'Sending...';
    btn.disabled = true;

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, message }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Unable to send message.');
        }

        btn.innerText = 'Message Sent!';
        btn.style.backgroundColor = '#4ade80';
        btn.style.borderColor = '#4ade80';
        contactForm.reset();
    } catch (error) {
        alert(error.message || 'Unable to send message. Please try again later.');
        btn.innerText = originalText;
    } finally {
        btn.disabled = false;
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = '';
            btn.style.borderColor = '';
        }, 3000);
    }
});