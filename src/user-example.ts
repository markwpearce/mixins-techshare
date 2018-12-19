import { Constructable } from "./mixin-helpers";

export class User {
  constructor(public username: string) {}
}

export function Timestamped<TBase extends Constructable>(Base: TBase) {
  return class extends Base {
    timestamp = new Date();
  };
}

export function Loggable<TBase extends Constructable>(Base: TBase) {
  return class extends Base {
    log() {
      console.log(this);
    }
  };
}

const TimestampedUser = Timestamped(User);

const LoggableTimestampedUser = Loggable(TimestampedUser);

const mixinUser = new LoggableTimestampedUser("mixins are cool!");

mixinUser.username; // "mixins are cool"
mixinUser.timestamp; // time when it was created
mixinUser.log(); // logs out the object
