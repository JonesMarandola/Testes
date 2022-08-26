const listaLivros = require ('./arrFolhaGalhoCompleto')

 //(array) recebe listaLivros no console.log 
function mergeSort(array) {
    
    //aqui criamos a parte que divide o array no meio para juntar(merge) no final.
    //chamamos mergeSort na parte1 e parte2, para que a function ocorra mais de uma vez, até que a condição do if seja falsa.
    if(array.length > 1) {
        const meio = Math.floor(array.length / 2); //divide array listaLivros e divide no meio
        const parte1 = mergeSort(array.slice(0, meio)); //slice divide o array no meio,indica onde vai começar[0] e terminar[meio] o corte ao meio do array
        const parte2 = mergeSort(array.slice(meio, array.length)); //[meio] [restante do array]
        array = ordena(parte1, parte2);
    }

    return array;
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0; //onde começa o array
    let posicaoAtualParte2 = 0; //onde começa o array
    const resultado = []; //guarda resultado ordenado de ambas as partes

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1]; //resultado do array parte1 na posicaoAtualParte1
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1) //push sempre manda o valor para o ultimo indice do array, não precisa criar uma let com posição ex(atual = 0)
            posicaoAtualParte1++
        } else {
            resultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }
    //concatena os arrays (se sobrar algum na parte1 ou parte2) concatena o array de resultado com qualquer elemento que tenha sobrado em algum dos arrays, concat o resultado com o slice que ficou sobrando
    return resultado.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1) //? = true
        : parte2.slice(posicaoAtualParte2)) //: = false, caso a condição do return seja falsa, significa que o array terminou e passamos para o slice da parte2.
}

console.log(mergeSort(listaLivros));