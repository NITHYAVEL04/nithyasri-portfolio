// Function for Certificates (Keep this part)
function openModal(imgSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imgSrc;
    }
}

function closeModal() {
    const modal = document.getElementById("certModal");
    if (modal) { modal.style.display = "none"; }
}

// THE EMAIL FIX:
// Wait for the page to fully load before looking for the form
window.onload = function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // This stops the page from refreshing
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const reason = document.getElementById('reason').value;

            // This creates the email command
            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const body = encodeURIComponent(`Visitor Name: ${name}\nPhone: ${phone}\n\nReason for contacting:\n${reason}`);
            
            // This opens the user's default email app (Outlook, Gmail, Apple Mail)
            window.location.href = `mailto:nithyasripalanivel65@gmail.com?subject=${subject}&body=${body}`;
        });
    } else {
        console.error("Could not find the contact-form ID in your HTML!");
    }
};