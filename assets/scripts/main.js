document.addEventListener('DOMContentLoaded', function() {
    // Select the contact form and the submit button
    const contactForm = document.getElementById('contact-form');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    // Add event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple form validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
        
        // Assuming form data is sent successfully, display a success message
        alert('Thank you for your message! We will get back to you shortly.');
        
        // Reset the form fields
        contactForm.reset();
    });
});
