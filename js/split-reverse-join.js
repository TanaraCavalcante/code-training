// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)
// "john McClane" --> "McClane john"

function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
  }



//   Escreva uma função para converter um nome em iniciais. Este kata pega estritamente duas palavras com um espaço entre elas.
// A saída deve ser duas letras maiúsculas com um ponto separando-as.

// Deve ficar assim:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
    //! Divide o nome em duas partes
    const nameParts = name.split(" ");
    
    //! Pega a primeira letra de cada parte, converte para maiúsculas e junta com um ponto
    const initials = nameParts[0][0].toUpperCase() + "." + nameParts[1][0].toUpperCase();
    
    return initials;
}
