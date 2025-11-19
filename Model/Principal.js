//Principal: sottoclasse ("figlia") di Human (classe base o superclasse)

class Principal extends Human {

  constructor(name, surname, yob, teachers) {
    super(name, surname, yob);
    this.teachers = teachers;
  }

  toString() {
    // return super.toString() + "\n" +  //CORREGGIAMO - USIAMO IL CICLO FOR OF
    //        "--------------------------------------- \n" +
    //        "insegnanti: \n" + andrea.name + ' ' + andrea.surname + ' - numero studenti: ' + andrea.students.length + "\n" +  //DEVO CHIAMARE LA PROPRITà USANDO THIS.
    //        evelyn.name + ' ' + evelyn.surname + ' - numero studenti: ' + evelyn.students.length;

    let string = super.toString() + "\n" +
      "--------------------------------------- \n" +
      "insegnanti: \n";

    for (const teacher of this.teachers) {
      string += teacher.name + 
                " " + 
                teacher.surname + 
                " - Numero allievi: " + 
                teacher.students.length + 
                "\n";
    }
    return string;      //COL CICLO FOR C'è MENO CODICE QUINDI PIù ORDINATO
  }

}