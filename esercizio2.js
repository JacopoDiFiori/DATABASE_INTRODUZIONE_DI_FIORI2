// ESERCIZIO 2
//  Scrivere un programma che converta una temperatura con una delle seguenti descrizioni:
//  -se temperatura è minore di 20, stampare “non ci sono più le mezze stagioni”
//  -se temperatura è maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
//  -se temperatura è minore di 30, stampare “mi dia una peroni sudata”
//  -se temperatura è minore di 0, stampare “non è tanto il freddo quanto l’umidità’”
//  -se temperatura è minore di -10, stampare “copriti…ancora ti raffreddi”
//  Cercate di risolvere questo esercizio utilizzando prima if else e poi con switch case.

let t = 11;

switch(true){
    case (t < -10) :
    console.log("copriti…ancora ti raffreddi");
        break;
    case (t >= -10 && t < 0) :
    console.log("non è tanto il freddo quanto l’umidità’");
        break;
        case (t >= 0 && t < 20) :
    console.log("non ci sono più le mezze stagioni");
        break;
        case (t >= 20 && t < 30) :
    console.log("mi dia una peroni sudata");
        break;
    default:
        console.log("lu mare, lu sole, lu ientu");
        break;
}





// if (t < 20 && t >= 0) {
//     console.log("non ci sono più le mezze stagioni");
// } else if (t >= 30){
//     console.log("lu mare, lu sole, lu ientu"); 
// } else if (t <= 30 && t >= 20) {
//     console.log("mi dia una peroni sudata");
// } else if (t < 0 && t >= -10) {
//     console.log("non è tanto il freddo quanto l’umidità");
// } else {
//     console.log("copriti…ancora ti raffreddi");
// }