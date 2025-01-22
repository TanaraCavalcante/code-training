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

