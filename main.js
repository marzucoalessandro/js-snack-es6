//******************** jsnack blocco 1******************

// /jsnack 1//



//l'utente inserisce due numeri in successione con due prompt...il software stampa il maggiore.

// let domanda1 = Number(prompt("dimmi un numero!"));
//
// let domanda2 = Number(prompt("dimmi un altro numero!"));
//
// const compare = (x, y) => {
//   if (x > y) {
//     return x;
//   } else if (y > x) {
//     return y
//   } else {
//     return "numeri uguali";
//   }
// };
// console.log(compare(domanda1, domanda2));

// fine esercizio 1*****************


// jsnack 2 //

//l'utente inserisce due parole in successione, con due prompt. il software stampa prima la parola più corta poi la più lunga.

  // let parola1 = prompt("scrivi una parola");
  // // console.log(parola1);
  //
  // let parola2 = prompt("scrivi una parola");
  // // console.log(parola2);
  //
  // const parolaLunga = (word1, word2) => {
  //   if (word1.length < word2.length) {
  //       return word1 + " " + word2;
  //   } else if (word2.length < word1.length) {
  //       return word2 +" " + word1;
  //   } else {
  //     return "parole di egual lunghezza";
  //   }
  // };
  //
  // console.log(parolaLunga(parola1, parola2));

  //fine esercizio 2*************************

  // jsnack 3***********************
  //Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

  // const sommaNumeri = () => {
  //   let somma = 0;
  //   for (var i = 1; i < 6; i++) {
  //
  //     let number = Number(prompt("dimmi un numero"));
  //     somma = number + somma;
  //   } return somma;
  // }
  //
  // console.log(sommaNumeri());

  // const sommaNumeri = () => {
  //   let somma = 0;
  //   let i = 1;
  //
  //   while (i < 6) {
  //     let number = Number(prompt("dimmi un numero"));
  //     somma += number;
  //     i++
  //   } return somma;
  // };
  // console.log(sommaNumeri());

  // fine esercizio 3*****************//////////

  // jsnack 4**********************

  //In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


  // let listaInvitati = ["marco", "nicola", "luigi", "claudio"];
  // console.log(listaInvitati);
  //
  // let domanda = prompt("qual'è il tuo nome?");
  // console.log(domanda);
  //
  // const invite = (array, domanda) => {
  //   let check = false;
  //   for (i = 0; i < array.length; i++) {
  //
  //       if (array[i] === domanda) {
  //         check = true;
  //         return "sei invitato";
  //       }
  //     } return "non sei invitato";
  //   };
  //
  // console.log(invite(listaInvitati, domanda));

  // fine esercizio 4***************

  // jsnack 5************

  //crea un array vuoto. chiedi per 6 volte all'utente di inserire un numero.
  //se è dispari inseriscilo nell'array.

    let lista = [];

    const dispari = () => {
      for (let i = 0; i < 6; i++) {
        let domanda = Number(prompt("scrivi un numero"));

        if (domanda %2 !==0) {
            lista.push(domanda);
        }
      } return lista;
    }
    console.log(dispari());
