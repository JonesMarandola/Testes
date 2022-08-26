const listaLivros = require('./arrayOrdenado')

function busca(array, de, ate, valorBuscado) { //passa os valores no console.log
    const meio = Math.floor((de + ate) / 2); //meio do array
    const atual = array[meio];

    if (de > ate) {
        return -1 // é o que causa o fim do processo
    }

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    }

}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 80));
