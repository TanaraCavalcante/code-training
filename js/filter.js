//! QUESTION
// Neste kata, você criará uma função que recebe uma lista de inteiros não negativos e strings e retorna uma nova lista com as strings filtradas.

function filter_list(l) {
    // Return a new array with the strings filtered out
     return l.filter(item => typeof item === "number");
  }