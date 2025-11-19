class Human {   //Human: classe ("padre")

    constructor(name, surname, yob) {   //yob: anno di nascita
        this.name = name;
        this.surname = surname;
        this._yob = yob;
        //Se una proprietà ha _ nel suo nome, vuol dire che è consigliabile non modificarlo. E' un avisso. Una convenzione tra programmatori.
        // Questo perché in Javascript i dati non sono protetti. I programmatori lo usano spesso come CONSIGLIO (SUGGERENZA: "NON MODIFICARE")
    }

    get yob() {  //GETTER
        //I getter in JavaScript sono funzioni che restituiscono il valore di una proprietà, permettendo di eseguire calcoli, validazioni o altre operazioni prima di restituire il valore. 
        // Servono a proteggere i dati e a controllare l'accesso alle proprietà di un oggetto, offrendo un modo più controllato per leggerne il valore rispetto all'accesso diretto, e possono essere usati per implementare logica complessa, come calcoli che dipendono da altre proprietà.

        return this._yob;  //questo per poter "esporre" la proprietà al di fuori di Human
    }



    set yob(newYob) {  //SETTER  
        //In JavaScript, un setter è un metodo speciale che ti consente di definire cosa succede quando si cerca di impostare il valore di una proprietà. 
        // Viene utilizzato per controllare e validare i dati prima che vengano assegnati, offrendo un modo per proteggere le proprietà e aggiungere logica personalizzata, 
        // come ad esempio nel caso di un esempio che restituisce un errore se il nome non può essere vuoto. 
        // Spesso viene usato insieme a un "getter", che è il metodo corrispondente per recuperare il valore della proprietà.

        //newValue non deve essere nato nel futuro e non deve avere più di 150 anni

        const actualYear = new Date().getFullYear();  //New Date prende la data ATTUALE, getFullYear sono le cifre

        const isInThePast = newYob <= actualYear;
        const isYoungerThan150 = (actualYear - newYob) < 150;

        if (isInThePast && isYoungerThan150) {  //così non è nato nel futuro e l'età non sia maggiore di 150
            this._yob = newYob;
        } else {
            console.log("anno non valido");
        }
    }

    toString() {
        return "nome: " + this.name + "\n" +
            "cognome: " + this.surname + "\n" +
            "anno di nascita: " + this._yob;    //finchè c'è dentro Human va bene metterlo così
    }

}