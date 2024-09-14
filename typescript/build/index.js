"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObjeto(pessoa) {
    console.log(pessoa);
}
console.log("############### Funções ###############\n");
printaObjeto({
    name: 'Bruce Wayne',
    vulgo: 'Batman',
});
console.log("-----------------------------------------");
function addNumber(x, y) {
    return x + y;
}
let x = 4;
let y = 7;
let soma = addNumber(x, y);
console.log(`A soma de ${x} + ${y} é: ${soma}`);
console.log("-----------------------------------------");
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Alexandre"));
console.log("-----------------------------------------");
console.log("\n############### Funções multi types ###############\n");
function callToPhone(phone) {
    return phone;
}
console.log("Number: " + callToPhone(11982772210));
console.log("String: " + callToPhone("11 98277-2210"));
console.log("\n############### Funções assíncronas ###############\n");
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const nome = "Alexandre";
        console.log(nome); // Exibe "Alexandre" dentro da função
    });
}
getDatabase(1); // Chama a função
console.log("\n############### Arrays ###############\n");
// Forma 1
let dados = ["Alexandre", "Luiz", "Lorena"]; // valor do tipo vetor
console.log("Array - forma 1: " + dados);
// Forma 2
let dados2 = ["Alexandre", "Luiz", "Lorena"];
console.log("Array - forma 2: " + dados2);
console.log("-----------------------------------------");
console.log("\n############### Arrays de multi types ###############\n");
let infos = ["Alexandre", 50, " Lorena"]; // somente letras e números
console.log("Array de multi types: " + infos);
console.log("-----------------------------------------");
console.log("\n############### Date ###############\n");
let nascimento = new Date("1974-08-03");
console.log("Tipo 'date': " + nascimento.toString());
let aniversario = new Date("1974-08-03");
console.log("Tipo 'date' (sem horário): " + aniversario.toLocaleDateString());
let feriado = new Date("1822-09-07T03:00:00"); // Ajusta para 3 da manhã no horário local
console.log("Tipo 'date': " + feriado.toString());
console.log("-----------------------------------------");
console.log("\n############### objeto tipado ###############\n");
//objeto - sem previsibilidade
let produto = {
    name: "Alexandre",
    cidade: "SP",
    idade: 30,
};
console.log(produto);
console.log("\n############### objeto tipado - com previsibilidade ###############\n");
let meuProduto = {
    nome: "tênis",
    preco: 89.99,
    unidades: 5,
};
console.log(meuProduto);
