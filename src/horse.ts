import { Mammal } from "./mammal";

export class Horse extends Mammal {
  gallop() {
    console.log(this.name, "Gallop -> 🐎");
  }
  trot() {
    console.log(this.name, "trot -> 🎠");
  }
}
