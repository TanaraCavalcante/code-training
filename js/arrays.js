//! 1 QUESTION
// Ben tem uma ideia muito simples para lucrar: ele compra algo e vende novamente. Claro, isso não lhe daria lucro algum se ele simplesmente comprasse e vendesse pelo mesmo preço. Em vez disso, ele vai comprar pelo menor preço possível e vender pelo maior.

// Tarefa
// Escreva uma função que retorne o número mínimo e máximo da lista/matriz fornecida.

function minMax(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    return [min, max];
  }



//! 2 QUESTION
// O museu de coisas incrivelmente chatas quer se livrar de algumas exibições. Miriam, a arquiteta de interiores, cria um plano para remover as exibições mais chatas. Ela dá uma classificação a elas e, em seguida, remove a que tem a classificação mais baixa.

// No entanto, assim que ela termina de classificar todas as exibições, ela está indo para uma feira importante, então ela pede que você escreva um programa que diga a ela as classificações das exibições após remover a mais baixa. Justo.

// Tarefa
// Dado um array de inteiros, remova o menor valor. Não altere o array/lista original. Se houver vários elementos com o mesmo valor, remova aquele com o índice mais baixo. Se você obtiver um array/lista vazio, retorne um array/lista vazio.

function removeSmallest(numbers) {
    //se for vazio retorna vazio!
    if(numbers.length === 0) return [];
    
    //encontrar os minimos
    let min = Math.min(...numbers);
    
    //encontrar o index do menor valor
    let minIndex = numbers.indexOf(min);
    
    //retorno o array excluindo o menor valor
    return [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
   
  }
  

  //! QUESTION
// Sua tarefa é criar uma função que possa receber qualquer inteiro não negativo como argumento e retorná-lo com seus dígitos em ordem decrescente. Essencialmente, reorganize os dígitos para criar o maior número possível.

// Exemplos:
// Entrada: 42145 Saída: 54421
// Entrada: 145263 Saída: 654321
// Entrada: 123456789 Saída: 987654321