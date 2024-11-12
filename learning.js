// 1: Hello World Function
// Create a function helloWorld() that simply prints "Hello, World!" to the console.

// function helloWorld() {
//   console.log("Hello World");
// }
// helloWorld();

//2:  Sum of Two Numbers
// Write a function sum(a, b) that takes two numbers as arguments and returns their sum.

// function sum(a, b) {
//   c = a + b;
//   console.log(c);
// }

// sum(1, 4);

// 3: Even or Odd
// Write a function isEven(num) that takes an integer as an argument and returns true if it's even, and false if it's odd.

// function isEven(num) {
//   if (num % 2 === 0) {
//     console.log("Its an even number");
//   } else {
//     console.log("Its an odd number");
//   }
// }

// isEven(10);

// 4: Fahrenheit to Celsius
// Write a function toCelsius(fahrenheit) that converts a temperature from Fahrenheit to Celsius. Use the formula:

// Celsius=(Fahrenheit−32)×5/9

// function toCelsius(fahrenheit) {
//   const celsius = ((fahrenheit - 32) * 5) / 9;
//   console.log(celsius);
// }

// toCelsius(64);

// 5: Find the Largest Number
// Create a function findLargest(arr) that takes an array of numbers and returns the largest number in the array.

function findLargest(...arr) {
  let c = arr[0];
  for (let i of arr) {
    if (i > c) {
      c = i;
    }
  }
  return c;
}

let x = findLargest(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);
