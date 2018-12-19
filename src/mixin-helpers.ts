/** Any type that can construct *something*. */
export type Constructable = new (...args: any[]) => {};

/**

 How To Write a mixin:

export function Mixin<TBase extends Constructable>(Base: TBase) {
  return class extends Base {
      // whatever new properties or methods you want
  };
}
*/
