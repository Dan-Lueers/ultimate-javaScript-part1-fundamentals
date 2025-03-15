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

// Exercise 3  - Landscape or Portrait
function exercise3() {
  width = 801;
  height = 800;
  console.log(isLandscape(width, height));
}

function isLandscape(width, height) {
  return width > height;
}

exercise3();
