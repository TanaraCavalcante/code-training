// Dados dois inteiros a e b, que podem ser positivos ou negativos, encontre a soma de todos os inteiros entre eles e incluindo-os e retorne-a. Se os dois números forem iguais, retorne a ou b.

// Nota: a e b não são ordenados!

// Exemplos (a, b) --> saída (explicação)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1, pois ambos são iguais)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b){
    if( a === b) return a;
    
    return a + b;
     //Good luck!
  }