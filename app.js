// Modal Functions for Certificates
function openModal(imgSrc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = imgSrc;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}

// Form logic to send email
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const reason = document.getElementById('reason').value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Visitor Name: ${name}\nPhone Number: ${phone}\n\nReason for contacting:\n${reason}`);
    
    window.location.href = `mailto:nithyasripalanivel65@gmail.com?subject=${subject}&body=${body}`;
});