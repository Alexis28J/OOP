//parametri name, surname, marks e tutee (studente a cui deve dare una mano)
//se lo studente a cui il tutor da una mano prende insufficiente, al tutor non succede niente, invece se prende sufficiente al tutor le viene aumentata la media di un punto come ricompensa.

class StudentTutor extends Student {   ////StudentTutor: sottoclasse di sottoclasse ("estensione di figlia")

constructor (name, surname, yob, marks, tutee){   //student tutor eredita da student e quindi "yob" deve andare prima di "marks"
    // this.name = name;
    // this.surname = surname;
    // this.marks = marks;
    super(name, surname, yob, marks);
    this.tutee = tutee;
}

calculateMean(){   //dobbiamo modificare il calcolo della media dello student tutor
    const actualMean = super.calculateMean();

    const tuteeMean = this.tutee.calculateMean();
 
    let newMean;

    if(tuteeMean >= 6){   //se la media del tutee è sufficiente, lo student tutor aumenta di 1 la sua media
      newMean = actualMean + 1;
    } else {              //caso contrario non succede niente alla sua media
        newMean = actualMean;
    }
    return newMean;
}

toString(){
    const string = //"media: " + this.calculateMean() + "\n"+  - la media è già inclusa nel toString di Student
                   super.toString() + "\n" +    //richiamo il toString di Student che a sua volta richiama quello di Human  
                   "---------------------- \n" + 
                   //"allievo: " + leonardo.name + ' ' + leonardo.surname + "\n" +     //NON VA BENE - DEVO FARE IL RIFERIMENTO CON THIS
                   "allievo: " + this.tutee.name + ' ' + this.tutee.surname + "\n" +
                   //"media dell'allievo: " + leonardo.calculateMean()                 //NON VA BENE - DEVO FARE IL RIFERIMENTO CON THIS
                   "media dell'allievo: " + this.tutee.calculateMean()
    return string;
}

}