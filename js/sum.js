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
    
   // Determina o menor e o maior número entre a e b
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  // Calcula a soma dos números entre min e max (inclusive)
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;

  }

  //!QUESTION
//   Dada uma lista de inteiros, determine se a soma de seus elementos é ímpar ou par.
// Dê sua resposta como uma string correspondendo a "ímpar" ou "par".
// Se o array de entrada estiver vazio, considere-o como: [0] (array com um zero).

// Exemplos:
// Entrada: [0]
// Saída: "par"

// Entrada: [0, 1, 4]
// Saída: "ímpar"

// Entrada: [0, -1, -5]
// Saída: "par"

function oddOrEven(array) {
    if(array.length === 0) return "even";
    
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      sum += array[i];
    }
    
    if(sum % 2 === 0){
      return "even"
    }else{
      return "odd"
    }
  }