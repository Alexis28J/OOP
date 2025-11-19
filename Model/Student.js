
class Student extends Human {   //classe in Javascript sono in MAIUSCOLE!  //ogni volta che facciamo una classe è meglio tenerllo separato

    //Student: sottoclasse ("figlia") di Human (classe base o superclasse)

    // constructor(name, surname, marks) { //name, surname, marks sono parametri e non proprietà cioè non appartengono all'oggetto Student
    //     this.name = name;               //This serve principalmente per accedere a proprietà e metodi di un oggetto all'interno di esso (ad esempio, this.name per accedere al nome dell'oggetto stesso), evitando il rischio che il codice diventi instabile se l'oggetto viene riassegnato.                                          
    //     this.surname = surname;         //This.name, this.surname e this.marks sono proprietà dell'oggetto Student
    //     this.marks = marks;   
    // }

    constructor(name, surname, yob, marks) {   //modificato per aggiungere Salma ("nuova studentessa")
        // this.name = name;               
        // this.surname = surname;
        super(name, surname, yob);  //super perché Student eredita da Human e quindi chiamo il costruttore della classe base (Human)
         if(marks){             //se marks è definito (diverso da undefined o null)
            this.marks = marks; //allora assegno marks a this.marks
        } else {
            this.marks = []; //altrimenti assegno un array vuoto a this.marks
        }
    
    }

    // calculateMean() {  //1* 
    //     let sum = 0;

    //     for (let i = 0; i < this.marks.length; i++) {  //al posto di student metto this
    //         const mark = this.marks[i];

    //         sum = sum + mark;  //sum += mark;
    //     }

    //     const mean = sum / this.marks.length;

    //     return mean;
    // }

    //calculateMean() non ha bisogno di parametri perché lavora con le proprietà dell'oggetto stesso
    calculateMean() {  //modificato per aggiungere Salma (nuovo studentessa)

         if (this.marks.length === 0) {
            return "non disponibile"
        }

        let sum = 0;

        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];

            sum += mark;
        }

        const mean = sum / this.marks.length;

        return mean;
    }


     addMark(newMark) {   //i metodi dentro una classe possono avere dei parametri

        if (newMark >= 0 && newMark <= 10) {
            this.marks.push(newMark);
        } else {
            console.log('errore, voto non valido');
        }
    }

    //to string non ha bisogno di parametri perché lavora con le proprietà dell'oggetto stesso
    toString(){  //lo chiamiamo toString perché Javascript lo riconosca come stringa
        const scheda = //"nome: " + this.name + "\n" + 
                       //"cognome: " + this.surname + "\n" +  //come Student eredita da Human posso cancellare queste righe e aggiungere invece 
                       super.toString() + "\n" +    //richiamo il toString di Human
                       "media: " + this.calculateMean();

        return scheda; 
    }

}
