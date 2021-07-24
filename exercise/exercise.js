function stringLength(string) {
  if (string.length > 10 || string.length < 1) {
    throw new Error('too long or too short');
  }
  return string.length;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calc {
  constructor(a = 0, b = 0) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  divide() {
    return this.a / this.b;
  }

  multiply() {
    return this.a * this.b;
  }
}

function capitalizeString(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export {
  stringLength, reverseString, Calc, capitalizeString,
};