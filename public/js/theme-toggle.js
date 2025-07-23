// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeToggleIcon = document.querySelector('.theme-toggle-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleIcon.textContent = '🌙';
    } else {
        body.classList.remove('dark-mode');
        themeToggleIcon.textContent = '☀️';
    }
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the link from navigating
        if (body.classList.contains('dark-mode')) {
            // Switch to light mode
            body.classList.remove('dark-mode');
            themeToggleIcon.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            body.classList.add('dark-mode');
            themeToggleIcon.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });
}); 