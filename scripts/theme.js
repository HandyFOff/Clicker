function siteTheme() {
    if (count >= 1000 && count < 2000) {
        wrapper.classList.add('sky-theme');
    } if (count >= 2000 && count < 4000) {
        wrapper.classList.remove('sky-theme');
        wrapper.classList.add('sea-theme');
    } if (count >= 4000 && count < 6000) {
        wrapper.classList.remove('sea-theme');
        wrapper.classList.add('sun-theme');
    } if (count >= 6000 && count < 8000) {
        wrapper.classList.remove('sky-theme');
        wrapper.classList.add('sky-theme');
    } if (count >= 8000 && count < 10000) {
        wrapper.classList.remove('sky-theme');
        wrapper.classList.add('sky-theme');
    }
      
}