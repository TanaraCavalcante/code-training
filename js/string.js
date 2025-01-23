//! QUESTION

// Você receberá uma string não vazia. Seu trabalho é retornar o(s) caractere(s) do meio da string.
// Se o comprimento da string for ímpar, retorne o caractere do meio.
// Se o comprimento da string for par, retorne os 2 caracteres do meio.

// Exemplos:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
    let length = s.length;
    
    if(length % 2 === 0){
      return s.substring(length / 2 - 1, length / 2 + 1)
    }else{
        return s.charAt(Math.floor(length / 2));
    }
  }