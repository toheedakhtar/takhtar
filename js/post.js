const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme, persist = false) {
    const isLight = theme === 'light';
    document.documentElement.dataset.theme = theme;
    document.getElementById('theme-state').textContent = theme;
    document.getElementById('theme-icon').textContent = isLight ? '☀' : '☾';
    themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} mode`);
    document.getElementById('theme-color').content = isLight ? '#f3f2e9' : '#101715';
    if (persist) {
        try { localStorage.setItem('theme', theme); } catch { /* Storage is optional. */ }
    }
}

setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
themeToggle.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light', true);
});
