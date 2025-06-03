function toggleTheme() {
    const body = document.body;

    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'light');
    }
}

// Auto-detect system preference on page load
if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.setAttribute('data-theme', 'light');
}
