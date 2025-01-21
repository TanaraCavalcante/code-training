// História
// Ben tem uma ideia muito simples para lucrar: ele compra algo e vende novamente. Claro, isso não lhe daria lucro algum se ele simplesmente comprasse e vendesse pelo mesmo preço. Em vez disso, ele vai comprar pelo menor preço possível e vender pelo maior.

// Tarefa
// Escreva uma função que retorne o número mínimo e máximo da lista/matriz fornecida.

function minMax(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    return [min, max];
  }