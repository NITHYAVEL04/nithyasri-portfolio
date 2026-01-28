// 1. PROJECT LOADER: Fetches your TCS and simulation project data
fetch('https://nithya-backend.onrender.com/api/projects')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('project-list');
        if (projectList) {
            projectList.innerHTML = ''; // Clears loading text
            data.forEach(proj => {
                const div = document.createElement('div');
                div.className = 'project-card';
                // Using backticks for the professional tech layout
                div.innerHTML = `
                    <h3>${proj.title}</h3>
                    <p>${proj.desc}</p>
                `;
                projectList.appendChild(div);
            });
        }
    })
    .catch(error => console.error('Error fetching data:', error));

// 2. MODAL FUNCTIONS: For viewing PEGA and Forage certificates
function openModal(imgSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");
    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
    }
}

function closeModal() {
    const modal = document.getElementById("certModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// 3. CONTACT FORM LOGIC: For professional inquiries
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const reason = document.getElementById('reason').value;

        // Subject line highlights your name for the recruiter
        const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
        const body = encodeURIComponent(`Visitor Name: ${name}\nPhone: ${phone}\n\nReason for connecting:\n${reason}`);
        
        // Connects directly to your verified email: nithyasripalanivel65@gmail.com
        window.location.href = `mailto:nithyasripalanivel65@gmail.com?subject=${subject}&body=${body}`;
    });
}