class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My Name Is ${this.name}!`;
  }
}

module.exports = {
  Person,
};
