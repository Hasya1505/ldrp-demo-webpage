// --- LDRP College Website Script ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle Logic
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('.navmenu');

    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation menu
            navMenu.classList.toggle('active');
            
            // Toggle the menu icon between bars (open) and times (close)
            const icon = menuIcon.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close menu when a navigation link is clicked (for better mobile UX)
        document.querySelectorAll('.navmenu a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = menuIcon.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }


    // 2. Simulated Form Submission Feedback (Replaces alert/confirm)
    // IMPORTANT: The form's action handles the actual submission to web3forms.
    // This JS only provides the client-side visual feedback.
    const contactForm = document.getElementById('contactForm');
    const messageBox = document.getElementById('form-message');

    if (contactForm && messageBox) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show a loading state
            messageBox.innerHTML = '<span style="color: #0077b6;"><i class="fas fa-spinner fa-spin"></i> Submitting your enquiry...</span>';
            messageBox.style.display = 'flex'; // Use flex to center icon/text

            // For demonstration, we simulate success after a short delay
            setTimeout(() => {
                // In a real application, you would check the response status here.
                
                contactForm.reset(); // Clear the form fields
                messageBox.innerHTML = '<span style="color: #00b4d8;"><i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. We will contact you shortly.</span>';
                
                // Automatically hide the message after a few seconds
                setTimeout(() => {
                    messageBox.style.display = 'none';
                }, 5000);

            }, 1500); // 1.5 seconds delay
        });
    }

});