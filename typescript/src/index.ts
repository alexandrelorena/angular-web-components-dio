type heroi = {
    name: string;
    vulgo: string;
};

function printaObjeto(pessoa: heroi){
    console.log(pessoa);
}

console.log("############### Funções ###############\n")

printaObjeto({
    name: 'Bruce Wayne',
    vulgo: 'Batman',
})

console.log("-----------------------------------------")

function addNumber(x: number, y: number): number {
    return x + y;
}

let x = 4;
let y = 7;
let soma: number = addNumber(x, y);

console.log(`A soma de ${x} + ${y} é: ${soma}`);

console.log("-----------------------------------------")

function addToHello(name: string) {
    return `Hello ${name}`;
}

console.log(addToHello("Alexandre"));

console.log("-----------------------------------------")

console.log("\n############### Funções multi types ###############\n")

function callToPhone(phone: number | string): number | string {
    return phone;
}

console.log("Number: " + callToPhone(11982772210));
console.log("String: " + callToPhone("11 98277-2210"));

console.log("\n############### Funções assíncronas ###############\n")

async function getDatabase(id: number): Promise<void> {
    const nome = "Alexandre";
    console.log(nome);  // Exibe "Alexandre" dentro da função
}

getDatabase(1);  // Chama a função


console.log("\n############### Arrays ###############\n")

// Forma 1
let dados: string [] = ["Alexandre", "Luiz", "Lorena"]; // valor do tipo vetor
console.log("Array - forma 1: " + dados)

// Forma 2
let dados2: Array<string> = ["Alexandre", "Luiz", "Lorena"]
console.log("Array - forma 2: " + dados2)

console.log("-----------------------------------------")

console.log("\n############### Arrays de multi types ###############\n")
let infos: (string | number)[] = ["Alexandre", 50, " Lorena"];  // somente letras e números
console.log("Array de multi types: " + infos)

console.log("-----------------------------------------")

console.log("\n############### Date ###############\n")

let nascimento: Date = new Date("1974-08-03");
console.log("Tipo 'date': " + nascimento.toString());

let aniversario: Date = new Date("1974-08-03");
console.log("Tipo 'date' (sem horário): " + aniversario.toLocaleDateString());

let feriado: Date = new Date("1822-09-07T03:00:00"); // Ajusta para 3 da manhã no horário local
console.log("Tipo 'date': " + feriado.toString());

console.log("-----------------------------------------")

console.log("\n############### objeto tipado ###############\n")

//objeto - sem previsibilidade
let produto: object = {
    name: "Alexandre",
    cidade: "SP",
    idade: 30,      
};

console.log(produto);

console.log("\n############### objeto tipado - com previsibilidade ###############\n")

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};
let meuProduto: ProdutoLoja = {
    nome: "tênis",
    preco: 89.99,
    unidades: 5,
}
console.log(meuProduto);
