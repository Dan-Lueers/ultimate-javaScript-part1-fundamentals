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

// #################################################################################
// Exercise 9 - Sum of multiples
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
function exercise9() {
    console.log(sum(10));
}

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

    return sum;
}

// #################################################################################
// Exercise 10 - Grade
// Average = 70
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
function exercise10() {
    const marks = [10, 10, 84, 87, 82];
    console.log(calculateGrade(marks));
}

function calculateGrade(marks) {
    const avg = calculateAverage(marks);

    if (avg >= 90) return 'A';
    if (avg >= 80) return 'B';
    if (avg >= 70) return 'C';
    if (avg >= 60) return 'D';
    return 'F';
}

function calculateAverage(array) {
    const totalMarks = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    return totalMarks / array.length;
}

// #################################################################################
// Exercise 11 - Stars
function exercise11() {
    showStars(10);
}

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('*'.repeat(i));
    }
}

// #################################################################################
// Exercise 12 - Prime
function exercise12() {
    showPrimes(120);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) return false;

    return true;
}

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

// #################################################################################
// Exercise 13 - Address Object
// street
// city
// zipCode
// showAddress (address)
function exercise13() {
    const myAddress = {
        street: 'Main Street',
        city: 'Zurich',
        zip: 8008,
    };
    showAddress(myAddress);
}
function showAddress(address) {
    for (const key in address) {
        console.log(key, ': ', address[key]);
    }
}

// #################################################################################
// Exercise 14 - Factory and Constructor Functions
function exercise14() {
    let addressA = createAddress('Main Street', 'Luzern', '4583');
    showAddress(addressA);

    let addressB = new Address('Potato street', 'Afghanistan', 666);
    showAddress(addressB);
}

function createAddress(street, city, zip) {
    return {
        street,
        city,
        zip,
    };
}

function Address(street, city, zip) {
    this.street = street;
    this.city = city;
    this.zip = zip;
}

// #################################################################################
// Exercise 15 - Object Equality
function exercise15() {
    const address1 = new Address('a', 'b', 'c');
    const address2 = new Address('a', 'b', 'c');
    const address3 = { street: 'a', city: 'b', zip: 'c', potato: 'd' };
    let potato = address1;

    console.log('are Equal: ', areEqual(address1, address3));
    console.log('are Same: ', areSame(address1, address2));
}

function areEqual(address1, address2) {
    console.log(Object.keys(address1).length, Object.keys(address2).length);
    if (Object.keys(address1).length !== Object.keys(address2).length)
        return false;

    for (const key in address1) {
        if (!address2.hasOwnProperty(key) || address2[key] !== address1[key])
            return false;
    }
    return true;
}

function areSame(address1, address2) {
    return address1 === address2;
}

// #################################################################################
// Exercise 16 - Blog Post Object
// title
// body
// author
// views
// comments
// (author, body)
// isLive
function exercise16() {
    const blogPost = {
        title: 'my blog post',
        body: 'some text....',
        author: 'Dan the man',
        views: 777,
        comments: [
            {
                author: 'Mr. Potato Head',
                body: 'cool post mate',
            },
            {
                author: 'Keanu Reeves',
                body: 'a bloody pencil mate',
            },
        ],
        isLive: true,
    };
    console.log(blogPost);
}

// #################################################################################
// Exercise 17 - Constructor Functions
function exercise17() {
    const newPost = new BlogPost(
        'wicked article',
        'some text...',
        'dan the man'
    );
    console.log(newPost);
}
function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

// #################################################################################
// Exercise 18 - Price Range Object
function exercise18() {
    const priceRanges = [
        { label: '$', tooltip: 'cheap', minPerPerson: 0, maxPerPerson: 10 },
        { label: '$$', tooltip: 'pricey', minPerPerson: 11, maxPerPerson: 20 },
        {
            label: '$$$',
            tooltip: 'expensive',
            minPerPerson: 21,
            maxPerPerson: 50,
        },
        {
            label: '$$$$',
            tooltip: 'ultra expensive',
            minPerPerson: 51,
            maxPerPerson: 100,
        },
    ];
}

// #################################################################################
// Exercise 19 - Array from range
function exercise19() {
    const numbers = arrayFromRange(8, 14);
    console.log(numbers);
}

function arrayFromRange(min, max) {
    const numbers = [];
    for (let i = min; i <= max; i++) numbers.push(i);

    return numbers;
}

// #################################################################################
// Exercise 20 - includes
function exercise20() {
    console.log(includes([1, 2, 3, 4, 5], 1));
}

function includes(array, searchElement) {
    for (const element of array) if (element === searchElement) return true;
    return false;
}

// #################################################################################
// Exercise 21 - except
function exercise21() {
    const numbers = [1, 2, 3, 4, 5, 1, 1, 1];
    const output = except(numbers, [3, 4, 1]);
    console.log(output);
}

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element)) output.push(element);

    return output;
}

// #################################################################################
// Exercise 22 - Moving an Element
function exercise22() {
    const numbers = [1, 2, 3, 4, 5];
    const output = move(numbers, 2, -3);
    console.log(output);
}

function move(array, index, offset) {
    let position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }

    const output = [...array];
    const removedValue = output.splice(index, 1)[0];
    output.splice(position, 0, removedValue);

    return output;
}

// #################################################################################
// Exercise 23 - Count occurences
function exercise23() {
    const numbers = [1, 2, 3, 4, 2, 2, 2, 5];
    const count = countOccurences(numbers, 2);
    console.log('occurences: ', count);
}

function countOccurences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = current === searchElement ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
}

// #################################################################################
// Exercise 24 - Get Max
function exercise24() {
    const numbers = [1, 2];
    console.log(getMax(numbers));
    console.log(getMaxReduce(numbers));
}

function getMax(array) {
    if (array.length === 0) return undefined;
    let max = -1;
    for (const value of array) max = value > max ? value : max;

    return max;
}

function getMaxReduce(array) {
    if (array.length === 0) return undefined;
    return array.reduce((accumulator, current) =>
        current > accumulator ? current : accumulator
    );
}

// #################################################################################
// Exercise 25 - Get Max
// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title
// Result should be:
//'b'
//'a'
function exercise25() {
    const movies = [
        { title: 'a', year: 2018, rating: 4.5 },
        { title: 'b', year: 2018, rating: 4.7 },
        { title: 'c', year: 2018, rating: 3 },
        { title: 'd', year: 2017, rating: 4.5 },
    ];
    const filtered = filterMovies(movies, 2018, 4);
    const sorted = sortMovies(filtered);
    console.log(sorted);
    for (const movie of sorted) {
        console.log(movie.title);
    }

    // Mosh solution
    const titles = movies
        .filter((m) => m.year === 2018 && m.rating >= 4)
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map((m) => m.title);
    console.log('movies: ', titles);
}

function filterMovies(movies, year, minRating) {
    let filtered = [...movies];
    return filtered.filter(
        (movie) => movie.year === year && movie.rating >= minRating
    );
}

function sortMovies(movies) {
    return [...movies].sort((a, b) => b.rating - a.rating);
}

exercise25();
