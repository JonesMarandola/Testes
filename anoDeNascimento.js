let pessoa = {
    nome: "João",
    sobrenome: "silva",
    anoDeNascimento: 2006,
    cidadeNatal: "umuarama",
    cpf: 1594891264894
};

var anoAtual = 2022;
var idade = anoAtual - pessoa.anoDeNascimento;

console.log(`Seu nome é ${pessoa.nome} e ele tem ` + idade + ` anos.`);

if (idade >= 16) {
    console.log("Ele esta apto para votar.");
} else {
    console.log("Ele não pode votar!!!");
}

if (idade >= 18) {
    console.log("Ele está apto para tirar a CNH.");
} else {
    console.log("Ele não está apto para tirar a CNH!!!");
}
