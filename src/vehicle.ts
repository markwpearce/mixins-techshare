export class Vehicle {
  position = 0;

  transport() {
    this.position++;
    console.log(`⏩`.repeat(this.position));
  }
}
