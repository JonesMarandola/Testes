const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
//o valor de atual muda de 25[0] para outro preço x[1,2,3...] e quando este valor for menor que o  valor no indice 0, maisBarato = atual
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual; 
        }
    }
    return maisBarato;
}

module.exports = menorValor;
