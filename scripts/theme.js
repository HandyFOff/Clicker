function checkTheme() {
    if (level == 5) {
        wrapper.classList.add('woods-theme');
    } if (level == 10) {
        wrapper.classList.remove('woods-theme');
        wrapper.classList.add('mountains-theme');
    } if (level == 15) {
        wrapper.classList.remove('mountains-theme');
        wrapper.classList.add('taiga-theme');
    } if (level == 20) {
        wrapper.classList.remove('taiga-theme');
        wrapper.classList.add('oak-woods');
    } if (level == 25) {
        wrapper.classList.remove('oak-woods');
        wrapper.classList.add('dark-woods');
    } if (level == 30) {
        wrapper.classList.remove('dark-woods');
        wrapper.classList.add('scary-woods');
    } if (level == 35) {
        wrapper.classList.remove('scary-woods');
        wrapper.classList.add('green-woods');
    } if (level == 40) {
        wrapper.classList.remove('green-woods');
        wrapper.classList.add('sky-theme');
    }
    
    return level;
}