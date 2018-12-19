export class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  breathe() {
    console.log(this.name, `*inhales* *exhales*`);
  }
  eat(food: any) {
    console.log(this.name, `nom nom nom`, food);
  }
  die() {
    console.log(this.name, "😵");
  }
}
