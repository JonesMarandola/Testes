const {edGalho, edFolha} = require('./arrFolhaGalho')

function juntaListas(lista1, lista2) {
  let listaFinal = []; //recebe no final em lista1 e lista 2, edGalho e edFolha.
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  let atual = 0;

  while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
    let produtoAtualLista1 = lista1[posicaoAtualLista1]; //produto da lista1(edGalho) na posição que esta passando [0]
    let produtoAtualLista2 = lista2[posicaoAtualLista2]; //produto da lista2(edFolha) na posição que esta passando [0]

    // caso o preço do produto da lista1 seja menor que da lista2, passamos para a listaFinal no indice que esta passando
    if (produtoAtualLista1.preco < produtoAtualLista2.preco)  {
      listaFinal[atual] = produtoAtualLista1;
      posicaoAtualLista1++; //para mudar o valor do indice
    } else {
      listaFinal[atual] = produtoAtualLista2;
      posicaoAtualLista2++;
    }

    atual++; //listaFinal sempre muda o indice
  }
  //pega elementos da lista1 e passa elementos dela para o final da listaFinal
  while (posicaoAtualLista1 < lista1.length) {
    listaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    atual++;
  }

  while (posicaoAtualLista2 < lista2.length) {
    listaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
  }
  return listaFinal;
}

console.log(juntaListas(edGalho, edFolha))
