 
document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor tags that have an href starting with '#' (bookmark links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href'); // Get the target ID from the href
            const targetElement = document.querySelector(targetId); // Find the target element

            if (targetElement) {
                // Smooth scroll to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});