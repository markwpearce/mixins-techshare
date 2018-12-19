import { Horse } from "./horse";
import { Transportable } from "./transportable";

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
