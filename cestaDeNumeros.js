var cestaDeNumeros = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7];
var numerosPositivos = [];
var numerosNegativos = [];

for (let i = 0; i < cestaDeNumeros.length; i++) {
    if (cestaDeNumeros[i] > 0) {
        numerosPositivos.push(cestaDeNumeros[i]);
    } else if (cestaDeNumeros[i] < 0) {
        numerosNegativos.push(cestaDeNumeros[i]);
    }
}

console.log("Numeros positivos " + numerosPositivos);
console.log("Numeros negativos " + numerosNegativos);
