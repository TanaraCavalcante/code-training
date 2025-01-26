//! QUESTION

// Nosso time de futebol terminou o campeonato.
// Os resultados das partidas do nosso time são registrados em uma coleção de strings. Cada partida é representada por uma string no formato "x:y", onde x é a pontuação do nosso time e y é a pontuação do nosso oponente.

// Por exemplo: ["3:1", "2:2", "0:1", ...]

// Os pontos são concedidos para cada partida da seguinte forma:
// se x > y: 3 pontos (vitória)
// se x < y: 0 pontos (derrota)
// se x = y: 1 ponto (empate)
// Precisamos escrever uma função que pegue essa coleção e retorne o número de pontos que nosso time (x) obteve no campeonato pelas regras fornecidas acima.

// Observações:
// nosso time sempre joga 10 partidas no campeonato
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let totalPoints = 0;
 
   for (let game of games) {
     const [x, y] = game.split(":").map(Number);
 
     if (x > y) {
       totalPoints += 3; // Vitória
     } else if (x === y) {
       totalPoints += 1; // Empate
     }
     // Não é necessário adicionar nada para derrota (x < y), pois o totalPoints não muda.
   }
 
   return totalPoints;
 }