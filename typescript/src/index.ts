type heroi = {
  name: string;
  vulgo: string;
};

function printaObjeto(pessoa: heroi) {
  console.log(pessoa);
}

console.log("############### Funções ###############\n");

printaObjeto({
  name: "Bruce Wayne",
  vulgo: "Batman",
});

console.log("-----------------------------------------");

function addNumber(x: number, y: number): number {
  return x + y;
}

let x = 4;
let y = 7;
let soma: number = addNumber(x, y);

console.log(`A soma de ${x} + ${y} é: ${soma}`);

console.log("-----------------------------------------");

function addToHello(name: string) {
  return `Hello ${name}`;
}

console.log(addToHello("Alexandre"));

console.log("-----------------------------------------");

console.log("\n############### Funções multi types ###############\n");

function callToPhone(phone: number | string): number | string {
  return phone;
}

console.log("Number: " + callToPhone(11982772210));
console.log("String: " + callToPhone("11 98277-2210"));

console.log("\n############### Funções assíncronas ###############\n");

async function getDatabase(id: number): Promise<void> {
  const nome = "Alexandre";
  console.log(nome); // Exibe "Alexandre" dentro da função
}

getDatabase(1); // Chama a função

console.log("\n############### Arrays ###############\n");

// Forma 1
let dados: string[] = ["Alexandre", "Luiz", "Lorena"]; // valor do tipo vetor
console.log("Array - forma 1: " + dados);

// Forma 2
let dados2: Array<string> = ["Alexandre", "Luiz", "Lorena"];
console.log("Array - forma 2: " + dados2);

console.log("-----------------------------------------");

console.log("\n############### Arrays de multi types ###############\n");
let infos: (string | number)[] = ["Alexandre", 50, " Lorena"]; // somente letras e números
console.log("Array de multi types: " + infos);

console.log("-----------------------------------------");

console.log("\n############### Date ###############\n");

let nascimento: Date = new Date("1974-08-03");
console.log("Tipo 'date': " + nascimento.toString());

let aniversario: Date = new Date("1974-08-03");
console.log("Tipo 'date' (sem horário): " + aniversario.toLocaleDateString());

let feriado: Date = new Date("1822-09-07T03:00:00"); // Ajusta para 3 da manhã no horário local
console.log("Tipo 'date': " + feriado.toString());

console.log("-----------------------------------------");

console.log("\n############### objeto tipado ###############\n");

//objeto - sem previsibilidade
let produto: object = {
  name: "Alexandre",
  cidade: "SP",
  idade: 30,
};

console.log(produto);

console.log(
  "\n############### objeto tipado - com previsibilidade ###############\n",
);

type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};
let meuProduto: ProdutoLoja = {
  nome: "tênis",
  preco: 89.99,
  unidades: 5,
};
console.log(meuProduto);

console.log("\n############### Interfaces ###############\n");

//type X interface

type robot = {
  readonly id: number | string;
  name: string;
};

const bot1: robot = {
  id: 1,
  name: "megaman",
};

interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}

const bot2: robot2 = {
  id: 2,
  name: "megaman2",
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  },
};

const bot3: robot2 = {
  id: 3,
  name: "megaman3",
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  },
};

console.log((bot2.name = "Tesla"));
console.log(bot1);
console.log(bot2);

console.log(
  "\nCom 'readyonly', não será possível o usuário alterar o objeto\n",
);

console.log("Usar 'interface' quando for trabalhar com classes:\n");

class Pessoa implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `Hello, I'm ${this.name}!`;
  }
}

const p = new Pessoa(1, "Ale");
console.log(p.sayHello());

console.log("\n############### Classes ###############\n");

class Character {
  protected name: string;
  stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }
  attack(): void {
    console.log(`Atack with ${this.stregth} points`);
  }
}
const p1 = new Character("Fulano", 10, 98);
p1.attack();

console.log("\n############### Modificadores de acesso ###############\n");

/* 
data modifiers
    public
    private
    protected
*/

console.log("\nPrivate: só é acessível dentro da classe.\n");

console.log("Public: acessível fora da classe.\n");

console.log(
  "Protected: acessível dentro da classe e de classes que a herdam (subclasses).\n",
);

console.log("Public: acessível fora da classe.\n");

console.log("Funcionam para métodos também.\n");

class Personagem {
  public name: string;
  stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }
  attack(): void {
    console.log(`Atack with ${this.stregth} points`);
  }
}
const p2 = new Personagem("SirX", 15, 92);
p2.attack();

console.log("\n############### Subclasses ###############\n");

class Magician extends Character {
  magicPoints: number;
  constructor(
    name: string,
    stregth: number,
    skill: number,
    magicPoints: number,
  ) {
    super(name, stregth, skill);
    this.magicPoints = magicPoints;
  }
}

const p3 = new Character("Ryu", 10, 75);
const p4 = new Magician("Mago", 9, 69, 100);

console.log(
  p3,
  "\n",
  p4,
  ">> extendes de Character e adiciona atributo 'magicPoints'.",
);

console.log("\n############### Generics ###############\n");

function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["Alexandre", "goku"], ["vegeta"]);

console.log(numArray);
console.log(stgArray);

console.log("\n############### TS Node Dev ###############\n");

// com esse servidor, não é necessário buildar para rodar.

console.log("npm install ts-node-dev -D\n");

console.log(
  'No script adicionar: "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts"\n',
);

let dado: string = "Lorena";
console.log(dado);

console.log("\n############### Decorators ###############\n");

function ExibirNome(target: any) {
  console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas {}

console.log("\n############### Class Decorators ###############\n");

function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version });
  };
}

@apiVersion("1.10")
class Api {}

const api = new Api();
console.log("versã da api: ", api.__version);

console.log("\n############### Attribute Decorators ###############\n");

function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => "[play] => " + _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`);
      } else {
        _value = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}
class Api2 {
  @minLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api2 = new Api2("Alexandre");
console.log(api2.name);
