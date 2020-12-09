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

  let parola1 = prompt("scrivi una parola");
  // console.log(parola1);

  let parola2 = prompt("scrivi una parola");
  // console.log(parola2);

  const parolaLunga = (word1, word2) => {
    if (word1.length < word2.length) {
        return word1 + " " + word2;
    } else if (word2.length < word1.length) {
        return word2 +" " + word1;
    } else {
      return "parole di egual lunghezza";
    }
  };

  console.log(parolaLunga(parola1, parola2));

  //fine esercizio 2*************************

  
