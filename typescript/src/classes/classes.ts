// class Pessoa implements robot2 {
//     id: string | number;
//     name: string;

//     constructor(id: string | number, name: string){
//         this.id = id
//         this.name = name
//     }
//     sayHello(): string {
//         return `Hello, I'm ${this.name}!`;
//     }
// }

// const p = new Pessoa(1, "Ale");
// console.log(p.sayHello())

// console.log("\n---------------------------------\n")

// class Character {
//     protected name: string;
//     stregth: number;
//     skill: number;

//     constructor(name: string, stregth: number, skill: number) {
//         this.name = name;
//         this.stregth = stregth;
//         this.skill = skill;
//     }
//     attack(): void {
//         console.log(`Atack with ${this.stregth} points`);
//     }
// }
// const p1 = new Character("Fulano", 10, 98);
// p1.attack();

// class Magician extends Character {
//     magicPoints: number;
//     constructor(
//         name: string, 
//         stregth: number, 
//         skill: number, 
//         magicPoints: number
//     ){
//         super(name, stregth, skill);
//         this.magicPoints = magicPoints;
//     }
// }

// const p3 = new Character("Ryu", 10, 75);
// const p4 = new Magician("Mago", 9, 69, 100);