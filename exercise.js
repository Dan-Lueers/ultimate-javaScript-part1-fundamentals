// #################################################################################
// Exercise 1 - Swapping variables
function exercise1() {
  let a = 'red';
  let b = 'blue';

  let temp = a;
  a = b;
  b = temp;

  console.log(a);
  console.log(b);
}

// #################################################################################
// Exercise 2 - Max of two numbers
// Write a function that takes two numbers and returns the maximum of the two.
function exercise2() {
  a = 17;
  b = 33;
  console.log(max(a, b));
}

function max(a, b) {
  return a > b ? a : b;
}

// #################################################################################
// Exercise 3  - Landscape or Portrait
function exercise3() {
  width = 801;
  height = 800;
  console.log(isLandscape(width, height));
}

function isLandscape(width, height) {
  return width > height;
}

// #################################################################################
// Exercise 4 - FizzBuzz
// Divisible by 3 →> Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 → FizzBuzz
// Not divisible by 3 or 5 →> input
// Not a number => 'Not a number'

function exercise4() {
  const output = fizzBuzz(false);
  console.log(output);
}

function fizzBuzz(input) {
  if (typeof input !== 'number') {
    return NaN;
  }

  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fizz';
  if (input % 5 === 0) return 'Buzz';

  return input;
}

exercise4();
