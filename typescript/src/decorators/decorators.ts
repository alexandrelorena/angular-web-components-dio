// // console.log("\n############### Decorators ###############\n");

// function ExibirNome(target: any) {
//     console.log(target);
//   }

//   @ExibirNome
//   class Funcionario {}

//   @ExibirNome
//   class Quincas {}

//   console.log("\n############### Class Decorators ###############\n");

//   function apiVersion(version: string) {
//     return (target: any) => {
//       Object.assign(target.prototype, { __version: version });
//     };
//   }

//   @apiVersion("1.10")
//   class Api {}

//   const api = new Api();
//   console.log("versã da api: ", api.__version);

//   console.log("\n############### Attribute Decorators ###############\n");

//   function minLength(length: number) {
//     return (target: any, key: string) => {
//       let _value = target[key];

//       const getter = () => "[play] => " + _value;
//       const setter = (value: string) => {
//         if (value.length < length) {
//           throw new Error(`Tamanho menor do que ${length}`);
//         } else {
//           _value = value;
//         }
//       };

//       Object.defineProperty(target, key, {
//         get: getter,
//         set: setter,
//       });
//     };
//   }
//   class Api2 {
//     @minLength(3)
//     name: string;

//     constructor(name: string) {
//       this.name = name;
//     }
//   }

//   const api2 = new Api2("Alexandre");
//   console.log(api2.name);
