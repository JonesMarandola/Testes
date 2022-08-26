const listaLivros = require('./arrFolhaGalhoCompleto');
const trocaLugar = require('./encontraMenores');

function quickSort(array, esquerda, direita) { //parte a esquerda e a direito do pivo, listaLivros[0] e listaLivros.length -1 [10]
  if (array.length > 1) {
    let indiceAtual = particiona(array, esquerda, direita);
    if (esquerda < indiceAtual - 1) {
      quickSort(array, esquerda, indiceAtual - 1);
    }
    if (indiceAtual < direita) {
      quickSort(array, indiceAtual, direita)
    }
  }
  return array;
}

function particiona(array, esquerda, direita) {
  console.log('array', array)
  console.log('esquerda, direita', esquerda, direita)
  let pivo = array[Math.floor((esquerda + direita) / 2)]
  let atualEsquerda = esquerda; //0
  let atualDireita = direita; //10

  while (atualEsquerda <= atualDireita) { // vai funcionar enquanto o valor[indice] de atualEsquerda for menor que atualDireita, pq um pula o outro
    while (array[atualEsquerda].preco < pivo.preco) { //enquanto os arrays na posição da esquerda forem menores que o pivo[preco], anda 1 pra frente
      atualEsquerda++
    }

    while (array[atualDireita].preco > pivo.preco) { //enquanto os arrays na posição da direita forem maiores que o pivo[preco], anda 1 pra tras (lembrando que esquerda anda pra frente e direita pra tras)
      atualDireita--
    }

    if (atualEsquerda <= atualDireita) { //se o INDICE[] da esquerda for menor que da direita ex[5] [4] 
      trocaLugar(array, atualEsquerda, atualDireita); //usamos a função trocaLugar do encontraMenores para fazer o nome da função, troca o atualEsquerda pelo atualDireita e vice versa
      atualEsquerda++; //pq a atualEsquerda chega no final e atualDireita chega no inicio, e para continuar verificando temos que inverter
      atualDireita--;
    }
  }
  return atualEsquerda; //tem que retornar o indice que vamos usar como marcador do proximoa array
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1)) 
