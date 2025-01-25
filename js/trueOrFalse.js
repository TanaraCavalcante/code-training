//! QUESTION
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:
// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// -5,1,3 -> false

function isTriangle(a,b,c){
    // Verifica se os três lados são positivos e se satisfazem a desigualdade triangular
    return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
 }


 //!QUESTION
//  Complete a solução para que ela retorne true se o primeiro argumento (string) passado terminar com o 2º argumento (também uma string).

//  Exemplos:
 
//  solution('abc', 'bc') // retorna true
//  solution('abc', 'd') // retorna false

function solution(str, ending){
    // complete
   return str.endsWith(ending);
  }

  //!QUESTION
//   Um quadrado de quadrados
// Você gosta de blocos de construção. Você gosta especialmente de blocos de construção que são quadrados. E o que você gosta ainda mais é de organizá-los em um quadrado de blocos de construção quadrados!
// No entanto, às vezes, você não consegue organizá-los em um quadrado. Em vez disso, você acaba com um retângulo comum! Essas coisas malditas! Se você tivesse uma maneira de saber se está trabalhando em vão no momento... Espere! É isso! Você só precisa verificar se o seu número de blocos de construção é um quadrado perfeito.

// Tarefa
// Dado um número inteiro, determine se é um número quadrado
// Em matemática, um número quadrado ou quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo.
// Os testes sempre usarão algum número integral, então não se preocupe com isso em linguagens de tipagem dinâmica.

// Exemplos
// -1 => falso
// 0 => verdadeiro
// 3 => falso
// 4 => verdadeiro
// 25 => verdadeiro
// 26 => falso

const isSquare = function(n){
    if (n < 0) return false;
    
    //calcula raiz quadrada
    const sqrt = Math.sqrt(n);
    
     return Number.isInteger(sqrt);
    
  }

//! QUESTION

// Você estava acampando com seus amigos longe de casa, mas quando chega a hora de voltar, você percebe que seu combustível está acabando e a bomba mais próxima está a 50 milhas de distância! Você sabe que, em média, seu carro roda a cerca de 25 milhas por galão. Restam 2 galões.

// Considerando esses fatores, escreva uma função que diga se é possível chegar à bomba ou não.
// A função deve retornar true se for possível e false se não for.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // Calcule a distância máxima que o carro pode percorrer
    const maxDistance = mpg * fuelLeft;
  
    // Compare com a distância até a bomba e retorne o resultado
    return maxDistance >= distanceToPump;
  };


//! QUESTION

// Neste Kata, estamos passando um número (n) para uma função.
// Seu código determinará se o número passado é par (ou não).
// A função precisa retornar true ou false.
// Os números podem ser positivos ou negativos, inteiros ou flutuantes.
// Os flutuantes com parte decimal diferente de zero são considerados UNeven para este kata.