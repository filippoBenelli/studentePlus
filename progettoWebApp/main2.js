const nome = localStorage.getItem('nome');
const cognome = localStorage.getItem('cognome');
const sezione = localStorage.getItem('sezione').toUpperCase();
const titolo = document.getElementById('titolo');

//funzione di debug tramite console
console.log(nome);
console.log(cognome);
console.log(sezione);

//cambiamo il valore del titolo nell inner utilizzando le variabili nome e cognome
//con il dollaro per concatenarle al titolo e far vedere il nome e cognome utente
titolo.innerHTML = `Benvenuto ${nome} ${cognome}`;

const orario = document.getElementById('orario');
const assenze = document.getElementById('assenze');
const el = document.getElementById('el');
const main = document.getElementById('main');
const frame = document.getElementById('frameOrario');
const btBack = document.getElementById('back');

orario.addEventListener('click', () => {
    event.preventDefault();
    main.style.display = 'none';
    frame.style.display = 'block';
    btBack.style.display = 'block';

    frame.setAttribute('src', `https://www.galileicrema.edu.it/extra/orari/2024/${sezione}.pdf`);
    frame.style.width = '50rem';
    frame.style.height = '50rem';
    frame.style.marginTop = '10rem';
});

assenze.addEventListener('click', () => {
    event.preventDefault();
    main.style.display = 'none';
    frame.style.display = 'block';
    btBack.style.display = 'block';

    frame.setAttribute('src', 'https://pcto.galileicrema.it/orari/pub/supplenti-elenco.php');
    frame.style.width = '50rem';
    frame.style.height = '50rem';
    frame.style.marginTop = '10rem';
});

btBack.addEventListener('click', () => {
    event.preventDefault();
    main.style.display = 'block';
    frame.style.display = 'none';
    btBack.style.display = 'none';
    window.location.href = "principale.html";
});