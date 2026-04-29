
// gestione data
const timeElement = document.getElementById('today-date');
const oggi = new Date();

const opzioni = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

let dataFormattata = oggi.toLocaleDateString('it-IT', opzioni);
dataFormattata = dataFormattata.charAt(0).toUpperCase() + dataFormattata.slice(1);
timeElement.textContent = dataFormattata;

const dataISO = oggi.toISOString().split('T')[0];
timeElement.setAttribute('datetime', dataISO);


// gestione sezione centrale header
window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu-header-scomparsa');
    const hr = document.getElementById('menu-header-scomparsa-hr');
    const img = document.getElementById('logo-laterale');

    if (window.scrollY > 0) {
        menu.classList.add('apparizione-testata');
        hr.classList.add('apparizione-testata');

        if (window.innerWidth > 600)
            img.classList.add('apparizione-logo');
    } else {
        menu.classList.remove('apparizione-testata');
        hr.classList.remove('apparizione-testata');
        img.classList.remove('apparizione-logo');
    }
})

// toglie il logo quando lo schermo è piccolo
window.addEventListener('resize', function() {
    const img = document.getElementById('logo-laterale');

    if (window.innerWidth < 600)
        img.classList.remove('apparizione-logo');
})

// nasconde video / blog
function nascondi(id) {
    const item = document.getElementById(id);
    item.classList.toggle('nascondi');
}
