class Dog {
  constructor(name) {
    this.name = name;
    this.wagTail = () => 'Wagging tail!';
  }

  // eslint-disable-next-line class-methods-use-this
  bark() {
    return 'Woof!';
  }
}

const dog1 = new Dog('Max');
const dog2 = new Dog('Spot');

// A
const A = dog1.wagTail() === dog2.wagTail();
console.log(A); // true

// B
const B = dog1.wagTail === dog2.wagTail2;
console.log(B); // false

// C
const C = dog1.bark === dog2.bark;
console.log(C); // true

// D
const D = Object.getPrototypeOf(dog1) === Object.getPrototypeOf(dog2);
console.log(D); // true

// E
const E = dog1.constructor === dog2.constructor;
console.log(E); // true

// A,C,D,E
