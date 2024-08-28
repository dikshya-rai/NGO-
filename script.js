function donateNow() {
    alert("Thank you for your interest in donating! Please visit our donation page.");
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contactForm').reset();
});
