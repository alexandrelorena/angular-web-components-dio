// // ############### Tipos Primitivos ############### 

// //bollean
// let ligado: boolean = false; // só aceita valor do tipo referido

// let ligou= 1; // aceita qualquer valor pois não está tipado

// //string
// let nome: string = "Alexandre";

// let pessoa= 1; 

// //number
// let idade: number = 30;
// let altura: number = 1.70;

// // ############### Tipos Especiais ############### 

// //null
// let nulo: null = null; 

// //undefined
// let indefinido: undefined = undefined;

// // ############### Tipos abrangentes ############### 

// //void
// let retorno: void = undefined; //não retorna nada
// let retorna: void;
// function executaQuery(): void{};

// //any
// let retornoView: any = false; //pode retornar qualquer coisa

// //objeto - sem previsibilidade
// let produto: object = {
//     name: "Alexandre",
//     cidade: "SP",
//     idade: 30,      
// };

// //objeto tipado - com previsibilidade
// type ProdutoLoja = {
//     nome: string;
//     preco: number;
//     unidades: number;
// };
// let meuProduto: ProdutoLoja = {
//     nome: "tênis",
//     preco: 89.99,
//     unidades: 5,
// }

// // ############### Date ###############
// let aniversario: Date = new Date("1974-08-03");
// console.log(aniversario.toString());
