function checkSezione(){
    const sezione = document.getElementById('sezione').value.toUpperCase();
    const cut = sezione.slice(1);
    if(sezione.length>3){ //se la stringa supera i 3 caratteri allora sicuramente non esiste
        return false;
    }else{ //man mano ristringo il campo di ricerca
        switch (sezione[0]) { //controllo il primo carattere della stringa
            case '1':
                if (['CA', 'CB', 'IA', 'IB', 'IC', 'ID', 'IE', 'MA', 'MB', 'MC', 'LA', 'LB', 'LC', 'LD', 'LM'].includes(cut)) {
                    console.log("controllata");
                    return true;
                }
                break;
            case '2':
                if (['CA', 'CB', 'CC', 'IA', 'IB', 'IC', 'MA', 'MB', 'MC', 'LA', 'LB', 'LC', 'LD', 'LE', 'LM'].includes(cut)) {
                    console.log("controllata");
                    return true;
                }
                break;
            case '3':
                if (['BA', 'CA', 'CB', 'SA', 'SB', 'IA', 'IB', 'IC', 'ID', 'MA', 'MB', 'MC', 'LA', 'LB', 'LC', 'LD', 'LE', 'LM'].includes(cut)) {
                    console.log("controllata");
                    return true;
                }
                break;
            case '4':
                if (['BA', 'CA', 'CB', 'SA', 'SB', 'IA', 'IB', 'IC', 'ID', 'MA', 'MB', 'MC', 'LA', 'LB', 'LC', 'LD', 'LE'].includes(cut)) {
                    console.log("controllata");
                    return true;
                }
                break;
            case '5':
                if (['BA', 'CA', 'CB', 'SA', 'IA', 'IB', 'IC', 'ID', 'MA', 'MB', 'MC', 'LA', 'LB', 'LC', 'LD'].includes(cut)) {
                    console.log("controllata");
                    return true;
                }
                break;
            default: //se non inizia con nessuno di questi numeri allora non va bene
                return false;
        }
    } //in qualsiasi altro caso ritorna false
    return false;
}
document.getElementById('sezione').addEventListener('change', function(){
    if(checkSezione()){
        //se la sezione esiste allora rende il bottone cliccabile
        //togliendo l attributo disabled
        document.getElementById('invia').removeAttribute('disabled');
    }else{
        document.getElementById('invia').setAttribute('disabled', 'disabled');
        //se la sezione non esiste esce questo messaggio di errore
        alert('La classe inserita non esiste');
    }
});
document.getElementById('invia').addEventListener('click', function (event) {
    // dice al browser che non deve fare quello che farebbe di solito
    //in questo caso non deve aggiornare la pagina dopo aver inviato il form
    event.preventDefault();

    const nome = document.getElementById('name').value;
    const cognome = document.getElementById('cognome').value;
    const sezione = document.getElementById('sezione').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('cognome', cognome);
    localStorage.setItem('sezione', sezione);

    window.location.href = "principale.html"; //tramite l oggetto window apro il collegamento ad un altra pagina
});