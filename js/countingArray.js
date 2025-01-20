// Dado um array de inteiros.
// Retorna um array, onde o primeiro elemento é a contagem de números positivos e o segundo elemento é a soma de números negativos. 0 não é positivo nem negativo.
// Se a entrada for um array vazio ou for nulo, retorna um array vazio.

// Exemplo
// Para a entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], você deve retornar [10, -65].

function countPositivesSumNegatives(input) {
    // your code here
    if(input === null || input.length === 0){
      return [];
    }
    
    let positive = 0;
    let negative = 0;
    
    for (let i =0; i < input.length; i++){
      if(input[i] > 0){
        positive++;
      }else if(input[i] < 0){
        negative += input[i];
      }
    }
    
    return [positive, negative];
  }