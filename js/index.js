
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


// apparizione logo piccolo
window.addEventListener('scroll', function() {
    const testata = document.getElementById('testata-principale');

    if (window.scrollY > 50) {
        testata.classList.add('scivolamento');
    } else {
        testata.classList.remove('scivolamento');
    }
});