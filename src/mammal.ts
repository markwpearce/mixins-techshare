import { Animal } from "./animal";

export class Mammal extends Animal {
  walk() {
    console.log(this.name, "🐾🐾🐾🐾🐾");
  }
  milk() {
    console.log(this.name, "🍼");
  }
  get numberOfLegs(): number {
    return 4;
  }
}
