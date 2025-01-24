//! QUESTION

// Este kata consiste em multiplicar um determinado número por oito se for um número par e por nove caso contrário.

function simpleMultiplication(number) {
    // your code........
 if(number % 2 === 0){
   return number * 8;
 }else{
   return number * 9;
 }
}
