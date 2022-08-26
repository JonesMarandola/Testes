const livros = require('./listaLivros');

function insertionSort(lista) {

    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        //while analise se o proximo numero ex[1] é menor que o numero anterior ex[0], caso seja, trocam de lugar.
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            //mesma coisa do selectionSort com nomes diferentes
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];
    
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;
            // analise-- reduz um numero de analise para realizar o while novamente (caso haja troca) para verificar se o analise no indice atual é menor que analise no indice anterior ex[1] e [0]
            analise--
        }
    }

    console.log(lista);
}

insertionSort(livros);