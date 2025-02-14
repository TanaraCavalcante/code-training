//! QUESTION
// Neste kata, você criará uma função que recebe uma lista de inteiros não negativos e strings e retorna uma nova lista com as strings filtradas.

function filter_list(l) {
    // Return a new array with the strings filtered out
     return l.filter(item => typeof item === "number");
  }

//!Question

//Retorna o número (contagem) de vogais na string fornecida.
//Consideraremos a, e, i, o, u como vogais para este Kata (mas não y).
//A string de entrada consistirá apenas de letras minúsculas e/ou espaços.

function getCount(str) {
    return str.split('').filter(char => 'aeiou'.includes(char)).length;
}