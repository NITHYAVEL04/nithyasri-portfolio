/**
 * 1. SCROLL REVEAL ANIMATION
 * Adds a high-end, elegant "fade-in" effect as you scroll.
 */
const revealOnScroll = () => {
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Targets all glass cards for the animation
    document.querySelectorAll('.glass-card, .project-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)";
        observer.observe(card);
    });
};

/**
 * 2. PROJECT LOADER
 * Fetches your dynamic project data from Render.
 */
fetch('https://nithya-backend.onrender.com/api/projects')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('project-list');
        if (projectList) {
            projectList.innerHTML = ''; 
            data.forEach(proj => {
                const div = document.createElement('div');
                div.className = 'glass-card project-card'; // Added glass-card for styling
                div.innerHTML = `
                    <h3>${proj.title}</h3>
                    <p>${proj.desc}</p>
                `;
                projectList.appendChild(div);
            });
            // Re-run reveal logic after dynamic projects load
            revealOnScroll();
        }
    })
    .catch(error => console.error('Error fetching data:', error));

/**
 * 3. MODAL FUNCTIONS
 * Professional certificate viewer for PEGA and Job Simulations.
 */
function openModal(imgSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");
    if (modal && modalImg) {
        modal.style.display = "flex"; // "flex" centers the image perfectly
        modalImg.src = imgSrc;
    }
}

function closeModal() {
    const modal = document.getElementById("certModal");
    if (modal) {
        modal.style.display = "none";
    }
}

/**
 * 4. CONTACT FORM LOGIC
 * Connects directly to: nithyasripalanivel65@gmail.com
 */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const reason = document.getElementById('reason').value;

        const subject = encodeURIComponent(`Portfolio Inquiry: ${name}`);
        const body = encodeURIComponent(`Visitor Name: ${name}\nPhone: ${phone}\n\nMessage:\n${reason}`);
        
        window.location.href = `mailto:nithyasripalanivel65@gmail.com?subject=${subject}&body=${body}`;
    });
}

// Initial trigger for scroll animations
revealOnScroll();