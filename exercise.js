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

// #################################################################################
// Exercise 5 - Demerit Points
// Speed Limit = 70
// 5 -> 1 point
// Math.floor (1.3)
// 12 points →> suspended
function exercise5() {
  console.log(checkSpeed(130));
}

function checkSpeed(speed) {
  if (typeof speed !== 'number') return NaN;

  const speedLimit = 70;
  const threshold = 5;
  const diff = speed - speedLimit;
  const points = Math.floor(diff / threshold);

  if (points <= 0) return 'OK';
  else if (points >= 12) return 'License Suspended';
  else return 'Points: ' + points;
}

// #################################################################################
// Exercise 6 - Even and Odd numbers
function exercise6() {
  showNumbers(10);
}

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(i + ' ' + (i % 2 === 0 ? 'EVEN' : 'ODD'));
  }
}

// #################################################################################
// Exercise 7 - Count truthy
// Falsy
// undefined
// null
// ''
// false
// 0
// NaN
function exercise7() {
  console.log(countTruthy([0, '', false, NaN, 1, true]));
}

function countTruthy(array) {
  let truthyCount = 0;
  array.forEach((value) => {
    if (value) truthyCount++;
  });
  return truthyCount;
}

// #################################################################################
// Exercise 8 - String Properties

function exercise8() {
  const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b',
  };
  showProperties(movie);
}

function showProperties(object) {
  for (const key in object)
    if (typeof object[key] === 'string') console.log(key, object[key]);
}

exercise8();
