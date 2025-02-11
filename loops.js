// Write a code that will calculate and output to the console the sum of even numbers from the interval [a, b] Use for, while and do while constructions.

// FOR loop

let a = 1;
let b = 10;
let sum = 0;

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(`The sum of even numbers from the interval [${a}, ${b}] is ${sum}`);

// WHILE loop

let a = 1;
let b = 10;
let sum = 0;
let i = a;

while (i <= b) {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
}

console.log(`The sum of even numbers from the interval [${a}, ${b}] is ${sum}`);

// DO WHILE loop

let a = 1;
let b = 10;
let sum = 0;
let i = a;

do {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
} while (i <= b);

console.log(`The sum of even numbers from the interval [${a}, ${b}] is ${sum}`);
