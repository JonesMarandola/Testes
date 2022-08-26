var valorDaMulta = 4.00;
var kgPorMulta = 50;

var rendimentoDiario = 110;
var valorFinalMulta= 0.00;

if (rendimentoDiario < kgPorMulta) {
    console.log(`Não precisa pagar multa, você esta dentro do peso estabelecido!`)
}

if (rendimentoDiario >= kgPorMulta) {
    valorFinalMulta += 4.00;
}

if (rendimentoDiario >= 100) {
    valorFinalMulta += 4.00;
}

console.log(`Você deve pagar mais R$${valorFinalMulta}`)