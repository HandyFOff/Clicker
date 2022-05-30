function checkTheme() {
    if (level == 5) {
        wrapper.classList.add('sky-theme');
    } if (level == 10) {
        wrapper.classList.remove('sky-theme');
        wrapper.classList.add('sea-theme');
    } if (level == 15) {
        wrapper.classList.remove('sea-theme');
        wrapper.classList.add('sun-theme');
    } if (level == 20) {
        wrapper.classList.remove('sky-theme');
        wrapper.classList.add('sky-theme');
    } if (level == 25) {
        wrapper.classList.remove('sky-theme');
        wrapper.classList.add('sky-theme');
    }
      
}