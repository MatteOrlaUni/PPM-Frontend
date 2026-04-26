
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


// aggiunge logo appena inizio a scorrere la pagina
window.addEventListener("scroll", function() {
    const img = document.getElementById('logo-laterale');
    const menu = document.getElementById('menu-header-scomparsa');
    const hr = document.getElementById('menu-header-scomparsa-hr');

    if (window.scrollY > 0) {
        img.classList.add('apparizione-logo');
        menu.classList.add('apparizione-testata');
        hr.classList.add('apparizione-testata');
    } else {
        img.classList.remove('apparizione-logo');
        menu.classList.remove('apparizione-testata');
        hr.classList.remove('apparizione-testata');
    }
})
