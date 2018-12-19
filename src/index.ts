import { Mammal } from "./mammal";
import { Constructable } from "./mixin-helpers";

class Horse extends Mammal {
  gallop() {
    console.log(this.name, "Gallop -> 🐎");
  }
  trot() {
    console.log(this.name, "trot -> 🎠");
  }
}

function Transportable<TBase extends Constructable>(Base: TBase) {
  return class extends Base {
    position = 0;
    transport(distance: number) {
      this.position += distance;
      console.log(
        `Transporting ${distance} - Current position: ` +
          "⏩".repeat(this.position)
      );
    }
  };
}

console.log("Create...");
const buck = new (Transportable(Horse))("Buck");

console.log(`${buck.name} has ${buck.numberOfLegs} legs`);
console.log("Breathe...");
buck.breathe();
console.log("Eat...");
buck.eat("hay");
console.log("Trot...");
buck.trot();
console.log("Gallop...");
buck.gallop();
console.log("Transport 1...");
buck.transport(1);
console.log("Transport 5...");
buck.transport(5);
console.log("Die...");
buck.die();
