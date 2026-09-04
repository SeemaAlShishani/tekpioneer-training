const name = "seema";
let age = 19;
const university = "Jerash Private University";
console.log(
  `My name is ${name} , I am  ${age}  years old, and I study at ${university}`,
);

let a = 7;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

let price = 10;
let quantity = 4;
console.log(price * quantity);

console.log(typeof 5);
console.log(typeof "5");
console.log(typeof true);

let number = 10;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let grade = 80;
if (grade >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

let number1 = 12;
let number2 = 10;
if (number1 > number2) {
  console.log(number1);
} else {
  console.log(number2);
}

let temperature = 25;
if (temperature > 30) {
  console.log("Hot");
} else if (temperature >= 15) {
  console.log("Nice");
} else {
  console.log("Cold");
}
