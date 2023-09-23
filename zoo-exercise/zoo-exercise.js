class Animal {
  constructor(sound) {
    this.sound = sound;
  }
  speak(string) {
    return `${string.split(" ").join(` ${this.sound} `)} ${this.sound}`;
  }
}

class Lion extends Animal {
  constructor() {
    super("roar");
  }
}

class Tiger extends Animal {
  constructor() {
    super("grrr");
  }
}

const lion = new Lion();
const tiger = new Tiger();

console.log(`> lion.speak("I'm a lion")`);
console.log(`< ${lion.speak("I'm a lion")}`);
console.log('')
console.log(`> tiger.speak("Lions suck")`);
console.log(`< ${tiger.speak("Lions suck")}`);
