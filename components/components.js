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

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Load header and footer components
    await loadComponent('header', 'components/header.html');
    await loadComponent('footer', 'components/footer.html');
    
    // Initialize theme after components are loaded
    setTimeout(initializeTheme, 100);
});
