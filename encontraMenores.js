const listaLivros = require('./arrFolhaGalhoCompleto')

function encontraMenores(pivo, array) { //serve para encontrar qnts numeros menores que o pivo existem no array
  let menores = 0;

  for(let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual] //posição atual que esta rodando no array
    if (produtoAtual.preco < pivo.preco) { //caso algum produto tenha um valor menor que o pivo escolhido, adc +1 em menores
      menores++
    }
  }
  //trocaLugar serve para colocar o pivo na posição onde ele deve permanecer para ficar a frente dos que tem valor menor que ele.
  trocaLugar(array, array.indexOf(pivo), menores) //indexOf(pivo) vai pegar a posição onde o pivo está no momento
  return array
  //return menores
}

function trocaLugar(array, de, para) {
  const elem1 = array[de] //lugar onde estava o elemento ex[2]
  const elem2 = array[para] //para onde o elemento vai ex[5]

  array[para] = elem1
  array[de] = elem2
}

function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)]; //pegar pelo primeiro elemento vai bagunçar o codigo, escolhemos pegar o do centro
  encontraMenores(pivo, array);
  let valoresMenores = 0; //mostra quantos valores menores que o pivo temos, serve como posição de onde o array de atual = analisando vai

  for(let analisando = 0; analisando < array.length; analisando++) { //faz igual o trocaLugar mas apenas muda valores menor que o pivo
    let atual = array[analisando];
    if(atual.preco <= pivo.preco && atual !== pivo) {
      trocaLugar(array, analisando, valoresMenores)
      valoresMenores++
    }
  }

  return array;
}

console.log(divideNoPivo(listaLivros));
//console.log(encontraMenores(listaLivros[2], listaLivros));

module.exports = trocaLugar;