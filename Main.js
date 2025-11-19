console.log("Object Oriented Programing");

//OOP ("Object Oriented Programming")

//La programmazione orientata agli oggetti (OOP) in JavaScript è un paradigma (modello) di programmazione che organizza il codice in oggetti, che combinano dati (proprietà) e comportamenti (metodi). 
//Questo approccio, sebbene JavaScript sia nativamente basato su prototipi, consente di modellare entità reali e astratte in modo modulare, facilitando il riutilizzo del codice e la gestione di progetti complessi. I concetti chiave sono le classi (modelli per creare oggetti), l'incapsulamento, l'ereditarietà e il polimorfismo



//const stefania = { name: "stefania", surname: "dagnino", marks: [10, 9, 7, 8, 8] };  
//key = chiave (name, surname, marks), value = valore (stefania, dagnino, array di numeri [10, 9, 7, 8, 8])

//const leonardo = { name: "leonardo", surname: "silva", marks: [3, 4, 4, 2, 5] };



// //FUNZIONE PER FARE LA MEDIA DEI VOTI
// function calculateStudentMean(student) {

//     let sum = 0;

//     for (let i = 0; i < student.marks.length; i++) {
//         const mark = student.marks[i];

//         sum = sum + mark;
//     }

//     const mean = sum / student.marks.length;

//     return mean;
// }

// console.log(calculateStudentMean(stefania));
// console.log(calculateStudentMean(leonardo));


// //MA SE VOGLIAMO AGGIUNGERE UN VOTO
// function addMark(student, newMark) {  //FUNZIONE PER AGGIUNGERE UN VOTO

//     if (newMark >= 0 && newMark <= 10) {  //&& ("e")
//         student.marks.push(newMark);
//     } else {
//         console.log('errore, voto non valido');  //SISTEMA DI SICUREZZA PER NON AMMETTERE UN VOTO MAGGIORE A 10
//     }
// }

// addMark(stefania, 10);
// console.log(calculateStudentMean(stefania));

// addMark(leonardo, 20);
// console.log(calculateStudentMean(leonardo));


// //FACCIAMO UNA SCHEDA PER LO STUDENTE
// function creaScheda(student) {
    
//      const scheda = "nome: " + student.name + "\n" + 
//                     "cognome: " + student.surname + "\n" +
//                     "media: " + calculateStudentMean(student);

//      return scheda;               

// }

// console.log(creaScheda(stefania));
// console.log(creaScheda(leonardo));



//ORA USIAMO LE CLASSI (JAVASCRIPT) E ACCORCIAMO TUTTO IL CODICE

//const stefania = new Student("stefania", "dagnino", [10, 9, 7, 8, 8])  

//const leonardo = new Student("leonardo", "silva", [3, 4, 4, 2, 5]);       // sono uguali agli oggetti di prima


//FUNZIONE PER FARE LA MEDIA DEI VOTI
// function calculateStudentMean(student) {   //1*

//     let sum = 0;

//     for (let i = 0; i < student.marks.length; i++) {
//         const mark = student.marks[i];

//         sum = sum + mark;
//     }

//     const mean = sum / student.marks.length;

//     return mean;
// }

//console.log(calculateStudentMean(stefania));
//console.log(calculateStudentMean(leonardo));

//console.log(stefania.calculateMean());
//console.log(leonardo.calculateMean());


//MA SE VOGLIAMO AGGIUNGERE UN VOTO
// function addMark(student, newMark) {  //FUNZIONE PER AGGIUNGERE UN VOTO   //2* - VEDI RPOSITORY DEL PROF.

//     if (newMark >= 0 && newMark <= 10) {  //&& ("e")
//         student.marks.push(newMark);
//     } else {
//         console.log('errore, voto non valido');  //SISTEMA DI SICUREZZA PER NON AMMETTERE UN VOTO MAGGIORE A 10
//     }
// }

// addMark(stefania, 10);
// console.log(calculateStudentMean(stefania));

// addMark(leonardo, 20);
// console.log(calculateStudentMean(leonardo));

//stefania.addMark(10);
//console.log(stefania.calculateMean());


// leonardo.addMark(20);
// console.log(leonardo.calculateMean());


//FACCIAMO UNA SCHEDA PER LO STUDENTE
// function creaScheda(student) {
    
//      const scheda = "nome: " + student.name + "\n" + 
//                     "cognome: " + student.surname + "\n" +
//                     "media: " + calculateStudentMean(student);

//      return scheda;               

// }

// console.log(creaScheda(stefania));
// console.log(creaScheda(leonardo));

//console.log(stefania.toString());
// console.log("Studente: \n" + stefania);

// console.log(leonardo.toString());


//IMMAGINIAMO DI VOLER AGGIUNGERE UNALTRO STUDENTE
//const salma = new Student("salma", "sobhi", []);  //[] - immaginiamo che non ha ancora dei voti da mettere
                                                  //pertanto marks di Salma sarà undefined
                                                  

//console.log(salma.calculateMean()); //->NaN (0/0) a meno che mettiamo un messaggio "non disponibile" (calculateMean() modificato)
                                                  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CLASSE TEACHER
//Vedi file Teacher.js
//Vedi file Student-tutor.js
//Vedi file Human.js
//Anche il file Student.js e questo (Main.js)

//Da Human deriva Teacher e Student. 
//(a sua volta) Da Student deriva StudentTutor.

const stefania = new Student("stefania", "dagnino", 1990, [10, 9, 7, 8, 8]);
const leonardo = new Student("leonardo", "silva", 1991, [3, 4, 4, 2, 5]);
const salma = new Student("salma", "sobhi", 2000, [6, 6, 6, 6, 6]);

const eros = new StudentTutor("eros", "balan", 2005, [10, 9, 7, 8, 8], leonardo); // leonardo è il tutee di eros

const andrea = new Teacher("andrea", "asioli", 1970, [stefania, leonardo, salma]);  //Leonardo ha la media bassa e ha bisogno dei tutor
const evelyn = new Teacher("evelyn", "medina", 1985, [eros]); 

const elisabetta = new Principal("elisabetta", "fegino", 1960, [andrea, evelyn]);

//Prototype: Il prototipo in JavaScript serve per l'ereditarietà e la condivisione di proprietà e metodi tra oggetti. In sostanza, ogni oggetto ha un riferimento a un prototipo (un altro oggetto) e, se l'oggetto non possiede una proprietà specifica, JavaScript la cerca nella "catena" dei prototipi. 
// Questo permette di definire un template (il prototipo) per creare istanze di oggetti che ereditano le sue caratteristiche.

console.log(stefania.toString());  //si deve rispettare l'ordine di classe e sottoclasse
console.log(andrea.toString());
console.log(salma.toString());
console.log(eros.toString());

eros.addMark(7);
console.log(eros.calculateMean());

leonardo.addMark(10);
leonardo.addMark(9);
leonardo.addMark(9.5);
leonardo.addMark(8);
console.log(leonardo.calculateMean());  //dopo gli ultimi voti e perciò la media di leonardo è finalmente sufficiente
console.log(eros.calculateMean());  //pertanto la media di eros è aumentata di 1



//////////////////////////////////////////////////////////////

//ESERCITAZIONE

console.log(eros.toString());
//nome: eros
//cognome: balan
//media: 9.1666666
//------------------------
//allievo: leonardo silva
//media allievo: 6.0555555


console.log(andrea.toString());
//nome: andrea
//cognome: asioli
//---------------------------------
//allievi: 
//stefania dagnino - media: 8
//leonardo silva - media: 6,0555555
//salma sobhi - media: 6
//---------------------------------
//media della classe: 6,68


console.log(elisabetta.toString());
//nome: elisabetta
//cognome: fegino
//---------------------------------
//insegnanti: 
//andrea asioli - numero studenti: 3
//evelyn medina - numero studenti: 1


/////////////////

// eros.name = "giovanni";        //nulla mi vieta di cambiare l'oggetto
// console.log(eros.toString());  //ora il nome Eros è cambiato a Giovanni

const yearOfBirthOfEros = eros.yob;  
console.log(yearOfBirthOfEros);  //grazie a che ho messo get yob(){} (GETTER) in Human, posso usare yob senza _

eros.yob = 3000;
console.log(eros.yob);  //Non cambia niente, ha ignorato la modifica di questa proprietà perché questa è in "modalità lettura" 
                        //a meno che metta il SETTER (in questo caso in Human)

eros.yob = 100;
console.log(eros.yob);   //Grazie alle condizioni del setter, ora si può escludere dati assurdi

eros.yob = 1993;
console.log(eros.yob);  


