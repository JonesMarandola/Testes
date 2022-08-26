const precosLivros = [25, 15, 30, 50, 45, 20];

let maisBarato = 0;

//o valor de atual muda de 25[0] para outro preço x[1,2,3...] e quando este valor for menor que o  valor no indice 0, maisBarato = atual
for (let atual = 0; atual < precosLivros.length; atual++) {
    if (precosLivros[atual] < precosLivros[maisBarato]) {
        maisBarato = atual;
    }
}

console.log(`o livro mais barato custa ${precosLivros[maisBarato]}`)
//console.log(precosLivros)
