// interface Human {
//   name:string;
//   age:number;
//   gender:string;
// }

// const person = {
//   name: "Hannes",
//   age: 35,
//   gender: "male"
// };

// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;
//   constructor(name: string, age: number, gender: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

//   const lynn = new Human("Lynn", 18, "female");
// const sayHi = (person: Human): string => {
//     return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
//   };
  
//   // console.log(sayHi(person));
  
//   console.log(sayHi(lynn));

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "2020202020202", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

  export {};