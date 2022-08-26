const livros = require('./listaLivros');
const menorValor = require ('./menorValor');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual) //chamamos a for de menorValor .js, damos o array que a função pede junto com posição inicial.
    
    let livroAtual = livros[atual];
   //console.log('posição atual', atual)
   //console.log('livro atual ', livros[atual]);
    let livroMenorPreco = livros[menor];
   //console.log('menor preço', livros[menor])

    livros[atual] = livroMenorPreco; //a pocisão atual do livro no caso JS[0] se torna o livro com o menor preço, no caso o PHP[1] e isso acontece com os outros tbm (JS > PYTHON, JS> JAVA...)
    livros[menor] = livroAtual; // o livro menor preço PHP[1] toma a posição do livro da posição atual JS[0] e isso acontece com os outros (PYTHON[5] vai para o [1]JS, JAVA[2] vai para )

}

console.log(livros);
