// Theme switcher logic
function initializeTheme() {
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;
    
    if (!themeSwitch) return;
    
    // Set initial theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeSwitch.classList.add('active');
        themeSwitch.innerHTML = '<i class="fas fa-moon"></i> <span style="font-size:0.95em;">亮/暗</span>';
    }
    
    themeSwitch.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        
        if (isDark) {
            themeSwitch.classList.add('active');
            themeSwitch.innerHTML = '<i class="fas fa-moon"></i> <span style="font-size:0.95em;">亮/暗</span>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeSwitch.classList.remove('active');
            themeSwitch.innerHTML = '<i class="fas fa-sun"></i> <span style="font-size:0.95em;">亮/暗</span>';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Component loader function
async function loadComponent(selector, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        const element = document.querySelector(selector);
        if (element) {
            element.outerHTML = html;
        }
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Initialize Hamburger Menu for mobile
function initializeHamburgerMenu() {
    // Wait a bit for components to be fully loaded
    setTimeout(() => {
        // Handle both static and floating header hamburger menus
        const hamburgerFloat = document.getElementById('hamburger-menu-float');
        
        // Get all nav-links elements
        const allNavLinks = document.querySelectorAll('.nav-links');
        

        
        // Initialize floating header hamburger menu (second nav-links)
        if (hamburgerFloat && allNavLinks[1]) {
            hamburgerFloat.addEventListener('click', function() {
                allNavLinks[1].classList.toggle('active');
            });
        }
    }, 100);
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Load header and footer components
    await loadComponent('header-float', 'components/header-float.html');
    await loadComponent('header', 'components/header.html');
    // set position of header to static
    await loadComponent('footer', 'components/footer.html');
    initializeTheme();
    initializeHamburgerMenu();
});
