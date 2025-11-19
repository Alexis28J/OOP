class Teacher extends Human {   //Teacher: sottoclasse ("figlia")
    //aggiungo extends perché permetta a una nuova classe (la sottoclasse)(Teacher) 
    // di ereditare proprietà e metodi da un'altra classe (la classe base) (Human).

    constructor(name, surname, yob, students) {  //students è un array di studenti
        // this.name = name;
        // this.surname = surname;
        super(name, surname, yob);  // uso super per chiamare il costruttore della classe base (Human)
        this.students = students;  //students fa riferimento all'array di studenti passato come argomento "const andrea = new Teacher("andrea", "asioli", [stefania, leonardo, salma]);"
    }



    // calcolateAllMean(a, b, c){  

    //questo metodo non serve più perché calcoliamo la media della classe in modo dinamico,
    //iterando su tutti gli studenti nell'array this.students

    //         a = stefania.calculateMean();
    //         b = leonardo.calculateMean();
    //         c = salma.calculateMean();

    //         const allMean = (a + b + c) / 3;  

    //         return allMean;
    //     }


    //calculateAllMean() non ha bisogno di parametri perché lavora con le proprietà dell'oggetto stesso
    calculateAllMean(){   

    //per calcolare la media della classe, sommo le medie di tutti gli studenti e divido per il numero di studenti
            let totalMean = 0;
            //for (let i = 0; i < this.students.length; i++) {  //this.students è l'array di studenti      //VA BENE COMUNQUE
                //totalMean += this.students[i].calculateMean();  //this.students[i] è uno studente e chiamo il suo metodo calculateMean()
                //questo ciclo for itera su ogni studente nell'array this.students, calcola la media di ciascuno utilizzando il metodo calculateMean() e somma queste medie a totalMean.
            //}

            for (const student of this.students) {   //FACCIAMOLO COL FOR OF
                totalMean += student.calculateMean();
            }

            return totalMean / this.students.length; //divido la somma totale delle medie per il numero di studenti per ottenere la media della classe
    }


    //to string non ha bisogno di parametri perché lavora con le proprietà dell'oggetto stesso 
    toString() {
        // return super.toString() + "\n" +     //NON VA BENE
        //        "----------------------- \n" +
        //        "allievi: \n" + 
        //        stefania.name + ' ' + stefania.surname + ' - media: ' + stefania.calculateMean() + '\n' +  //DEVO USARE THIS. PER RICHIAMARE LE PROPRIETà
        //        leonardo.name + ' ' + leonardo.surname + ' - media: ' + leonardo.calculateMean() + '\n' +
        //        salma.name + ' ' + salma.surname + ' - media: ' + salma.calculateMean() + "\n" +
        //        "-----------------------" + "\n" +
        //        //"media della classe: " + (stefania.calculateMean() + leonardo.calculateMean() + salma.calculateMean()) / 3 
        //        "media della classe: " + this.calculateAllMean();

        let string = super.toString() + "\n" +
            "----------------------- \n" +
            "allievi: \n";

        for (const student of this.students) {  //FACCIAMO COL CICLO FOR OF PER
            string += student.name +
                " " +
                student.surname +
                " - media: " +
                student.calculateMean() +
                "\n";
        }

        string += "---------------------------\n";

        string += "media della clase: " + this.calculateAllMean();
        return string;
    }



}