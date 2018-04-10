const nostradamus = document.getElementById('nostradamus');
const nostradamusOverlay = document.getElementById('nostradamusoverlay');
const vedas = document.getElementById('vedas');
const vedasOverlay = document.getElementById('vedasoverlay');
const apocrypha = document.getElementById('apocrypha');
const apocryphaOverlay = document.getElementById('apocryphaoverlay');
const iching = document.getElementById('iching');
const ichingOverlay = document.getElementById('ichingoverlay');

nostradamus.addEventListener('click', () => {
    nostradamusOverlay.style.display = "block";
});
nostradamusOverlay.addEventListener('click', () => {
    nostradamusOverlay.style.display = "none";
});

vedas.addEventListener('click', () => {
    vedasOverlay.style.display = "block";
});
vedasOverlay.addEventListener('click', () => {
    vedasOverlay.style.display = "none";
});

apocrypha.addEventListener('click', () => {
    apocryphaOverlay.style.display = "block";
});
apocryphaOverlay.addEventListener('click', () => {
    apocryphaOverlay.style.display = "none";
});

iching.addEventListener('click', () => {
    ichingOverlay.style.display = "block";
});
ichingOverlay.addEventListener('click', () => {
    ichingOverlay.style.display = "none";
});



// function on(nostradamus) {
//     document.getElementById("nostradamusoverlay").style.display = "block";
// }
// function off(nostradamus) {
//     document.getElementById("nostradamusoverlay").style.display = "none";
// }

// function on() {
//     document.getElementById("vedasoverlay").style.display = "block";
// }
// function off() {
//     document.getElementById("vedasoverlay").style.display = "none";
// }

// function on() {
//     document.getElementById("apocryphaoverlay").style.display = "block";
// }
// function off() {
//     document.getElementById("apocryphaoverlay").style.display = "none";
// }

// function on() {
//     document.getElementById("ichingoverlay").style.display = "block";
// }
// function off() {
//     document.getElementById("ichingoverlay").style.display = "none";
// }