import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
  get numberOfWheels(): number {
    return 4;
  }
}
