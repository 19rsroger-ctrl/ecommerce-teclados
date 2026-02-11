// Shared Configuration
const CONFIG = {
    colors: {
        primary: "#0df233",
        dark: "#102213",
        light: "#f5f8f6"
    }
};

// Tailwind Config Injection (so we don't need inline script in every HTML)
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        darkMode: "class",
        theme: {
            extend: {
                colors: {
                    "primary": CONFIG.colors.primary,
                    "background-light": CONFIG.colors.light,
                    "background-dark": CONFIG.colors.dark,
                },
                fontFamily: {
                    "display": ["Space Grotesk"]
                },
                borderRadius: {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
                },
            },
        },
    }
}

// Common Navigation Logic (Mobile Bottom Bar)
document.addEventListener('DOMContentLoaded', () => {
    // Highlight active link based on URL
    const currentPath = window.location.pathname;
    const navButtons = document.querySelectorAll('nav.fixed.bottom-0 button, nav.fixed.bottom-0 div');

    // Simple logic to highlight nav items (placeholder)
    if (currentPath.includes('index') || currentPath === '/') {
        // Highlight Shop
    }
});

console.log("App Initialized");
