# TypeScript Mixins

Created for REDspace TechShare Dec 19 2018

## Classical Inheritance

A is a B is C

Ferrari is a Car is a Vehicle

```ts
class Vehicle {
  transportPassengers() {}
}

class Car extends Vehicle {
  get numberOfWheels(): number {
    return 4;
  }
}

class Ferrari extends Car {
  lookSexy() {}
  goReallyFast() {}
}
```

A is a B is C

Horse is a Mammal is a Animal

```ts
class Animal {
  breathe() {}
  eat(food: any) {}
  die() {}
}

class Mammal extends Animal {
  walk() {}
  milk() {}
  get numberOfLegs(): number {
    return 4;
  }
}

class Horse extends Mammal {
  gallop() {}
  trot() {}
}
```

## But wait a second... Can’t you ride a horse?

So, really, a horse is vehicle, right?

So:

Horse is a Vehicle, not a Animal?

But then it can’t eat!

```ts
class Animal {
  breathe() {}
  eat(food: any) {}
  die() {}
}

class Vehicle {
  transportPassengers() {}
}

class Horse extends Vehicle {
  gallop() {}
  trot() {}
}
```

## Multiple Inheritance is the problem!

Really, we want a Horse to be both an Animal AND a Vehicle, but that’s called Multiple Inheritance, and it’s not allowed in most languages (like JavaScript/TypeScript ... C++ & Python ftw)

```ts
class Animal {
 breathe() {}
 eat(food: any) {}
 die() {}
}

class Vehicle {
 transportPassengers() {}
}

class Horse extends Vehicle, Animal { // THIS IS NOT ALLOWED!
 gallop() {}
 trot() {}
}
```

## Soved with Mixins!

Inheritance: think _something is a something else_ (A Horse is an Animal)

Mixins: think _something has this other ability_ (A Horse has the ability to transport)

A mixin:

1. takes a constructor
2. declares a class that extends that constructor
3. adds members to that new class
4. and returns the class itself.

## In TypeScript

TypeScript enables fully-typed/auto-completable mixins!

```ts
/** Any type that can construct *something*. */
export type Constructable = new (...args: any[]) => {};

/** Define a function that returns a class that extends the argument */
export function Mixin<TBase extends Constructable>(Base: TBase) {
  return class extends Base {
    // whatever new properties or methods you want
  };
}
```

## Example

```ts
class User {
  constructor(public username: string) {}
}

function Timestamped<TBase extends Constructable>(Base: TBase) {
  return class extends Base {
    timestamp = new Date();
  };
}

function Loggable<TBase extends Constructable>(Base: TBase) {
  return class extends Base {
    log() {
      console.log(this);
    }
  };
}

const TimestampedUser = Timestamped(User);

const LoggableTimestampedUser = Loggable(TimestampedUser);

const mixinUser = new LoggableTimestampedUser("mixins are cool!");

console.log(mixinUser.username); // "mixins are cool!"
console.log(mixinUser.timestamp); // time when it was created
mixinUser.log(); // logs out the object
```

## Example in Pure JS

Yes, you can do the same thing in Pure JS, too:

```js
class User {
  constructor(username) {
    this.username = username;
  }
}

function Timestamped(Base) {
  return class extends Base {
    constructor(...args) {
      super(...args);
      this.timestamp = new Date();
    }
  };
}

function Loggable(Base) {
  return class extends Base {
    constructor(...args) {
      super(...args);
    }
    log() {
      console.log(this);
    }
  };
}

const mixinUser = new (Timestamped(Loggable(User)))("mixins_are_cool");

mixinUser.log(); // logs out the object
```

## Links

- https://blog.mariusschulz.com/2017/05/26/typescript-2-2-mixin-classes
- https://basarat.gitbooks.io/typescript/docs/types/mixins.html
- https://blogs.msdn.microsoft.com/typescript/2017/02/02/announcing-typescript-2-2-rc/

Don’t go here (it's out of date!):

- http://www.typescriptlang.org/docs/handbook/mixins.html
