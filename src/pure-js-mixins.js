class User {
  constructor(username) { this.username = username; }
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
    constructor(...args) { super(...args) }
    log() {
      console.log(this);
    }
  };
}

const mixinUser = new(Timestamped(Loggable(User)))("mixins are cool!");

mixinUser.log(); // logs out the object