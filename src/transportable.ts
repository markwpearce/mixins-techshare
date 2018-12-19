import { Constructable } from "./mixin-helpers";

export function Transportable<TBase extends Constructable>(Base: TBase) {
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
