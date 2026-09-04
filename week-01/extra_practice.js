for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 2; i <= 30; i += 2) {
  console.log(i);
}

for (let i = 20; i >= 1; i -= 2) {
  console.log(i);
}

let sum = 0;
for (let i = 0; i <= 50; i++) {
  sum += i;
}
console.log(sum);

let x = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${x} x ${i} = ${x * i}`);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log("five");
  } else {
    console.log(i);
  }
}

let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

let total = 0;
for (let i = 2; i <= 20; i += 2) {
  total += i;
}
console.log(total);

let a = 15;
let b = 27;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

let name = "Seema";
let age = 19;
let major = "Computer Science";
let grade = 96;
console.log(`My name is ${name}, I am ${age} years old, and I study ${major}`);

if (grade >= 50) {
  console.log("pass");
}

let f = 12;
let g = 4;

console.log(f + g);
console.log(f - g);
console.log(f * g);
console.log(f / g);
console.log(f % g);

let price = 15;
let quantity = 6;
console.log(`The total is ${price * quantity}`);

console.log(typeof 25);
console.log(typeof "25");
console.log(typeof false);

let number = 17;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

let n = 24;
if (n % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

let mark = 44;
if (mark >= 50) {
  console.log("pass");
} else {
  console.log("fail");
}

let p = 35;
let y = 28;
if (p > y) {
  console.log(p);
} else {
  console.log(y);
}

let temperature = 14;
if (temperature > 30) {
  console.log("Hot");
} else if (temperature >= 15) {
  console.log("Nice");
} else {
  console.log("Cold");
}

function greet() {
  console.log("Hello Seema");
}
greet();

function plus(a, b) {
  return a + b;
}
console.log(plus(7, 3));

function birth(birthYear) {
  return 2026 - birthYear;
}
console.log(birth(2007));

function numType(n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(numType(3));
console.log(numType(8));

function evaluation(grade) {
  if (grade >= 50) {
    return "pass";
  } else {
    return "fail";
  }
}
console.log(evaluation(70));
console.log(evaluation(40));

function weather(temp) {
  if (temp > 30) {
    return "Hot";
  } else if (temp >= 15) {
    return "Nice";
  } else {
    return "Cold";
  }
}
console.log(weather(35));
console.log(weather(20));
console.log(weather(10));

function bigger(j, k) {
  if (j > k) {
    return j;
  } else {
    return k;
  }
}
console.log(bigger(12, 19));
console.log(bigger(11, 30));

function calculateTotal(cost, number) {
  return cost * number;
}
console.log(calculateTotal(20, 15));

function average(r, t, v) {
  return (r + t + v) / 3;
}
console.log(average(80, 87, 92));

function studentInfo(name, age, university) {
  console.log(`I am ${name}, I am ${age} years old, I study at ${university}`);
}

studentInfo("Sara", 20, "Jerash Private University");

let fruits = ["apple", "banana", "orange", "mango", "grape"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[4]);

let nums = [10, 20, 30];
nums.push(50, 90);
console.log(nums);

let names = ["Seema", "Aynoor", "Sara", "Omar"];
console.log(names[2]);

let cities = ["Amman", "Irbid", "Jerash", "Aqaba"];
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

let numbers = [5, 10, 20, 25];
let ssum = 0;
for (let i = 0; i < numbers.length; i++) {
  ssum += numbers[i];
}
console.log(ssum);

let evenNum = [3, 8, 11, 14, 20, 25, 30];
for (let i = 0; i < evenNum.length; i++) {
  if (evenNum[i] % 2 === 0) {
    console.log(evenNum[i]);
  }
}

let gradess = [40, 75, 82, 35, 90, 55, 48, 67];
let paSs = 0;
for (let i = 0; i < gradess.length; i++) {
  if (gradess[i] >= 50) {
    paSs += 1;
  }
}
console.log(paSs);

let numms = [12, 45, 7, 89, 34, 21];
let largest = numms[0];
for (let i = 0; i < numms.length; i++) {
  if (largest < numms[i]) {
    largest = numms[i];
  }
}
console.log(largest);

let nummss = [12, 45, 7, 89, 34, 21];
let smallest = nummss[0];
for (let i = 0; i < nummss.length; i++) {
  if (smallest > nummss[i]) {
    smallest = nummss[i];
  }
}
console.log(smallest);

let grad = [80, 70, 90, 60, 100];
let tot = 0;
for (let i = 0; i < grad.length; i++) {
  tot += grad[i];
}
let averAge = tot / grad.length;
console.log(averAge);

let ns = [20, 75, 45, 90, 33, 60, 10, 85];
let l = 0;
for (let i = 0; i < ns.length; i++) {
  if (ns[i] > 50) {
    l += 1;
  }
}
console.log(l);

let ggrades = [95, 82, 74, 61, 43];
function gradeWord(markk) {
  if (markk >= 90) {
    return "Excellent";
  } else if (markk >= 80) {
    return "Very good";
  } else if (markk >= 70) {
    return "Good";
  } else if (markk >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
for (let i = 0; i < ggrades.length; i++) {
  console.log(ggrades[i] + " " + gradeWord(ggrades[i]));
}

let nb = [4, 7, 12, 3, 18, 21, 6, 9];
console.log(nb.length);

let nbSum = 0;
for (let i = 0; i < nb.length; i++) {
  nbSum += nb[i];
}
console.log(nbSum);

let nbAverage = nbSum / nb.length;
console.log(nbAverage);

let nbBigger = nb[0];
for (let i = 0; i < nb.length; i++) {
  if (nbBigger < nb[i]) {
    nbBigger = nb[i];
  }
}
console.log(nbBigger);

let nbSmaller = nb[0];
for (let i = 0; i < nb.length; i++) {
  if (nbSmaller > nb[i]) {
    nbSmaller = nb[i];
  }
}
console.log(nbSmaller);

let nbEven = 0;
for (let i = 0; i < nb.length; i++) {
  if (nb[i] % 2 === 0) {
    nbEven += 1;
  }
}
console.log(nbEven);

let nbOdd = 0;
for (let i = 0; i < nb.length; i++) {
  if (nb[i] % 2 === 1) {
    nbOdd += 1;
  }
}
console.log(nbOdd);

const unitPrice = 25;
const orderCount = 5;
let finalAmount = unitPrice * orderCount;

if (finalAmount > 100) {
  finalAmount -= 10;
  console.log(`Discount applied! Total to pay: ${finalAmount}`);
} else {
  console.log(`Total to pay: ${finalAmount}`);
}

const carSpeed = 95;
const speedLimit = 80;

if (carSpeed > speedLimit) {
  console.log(`Overspeeding by ${carSpeed - speedLimit} km/h! Ticket issued.`);
} else {
  console.log("Safe driving, thank you!");
}

const batteryLevel = 18;

if (batteryLevel <= 20) {
  console.log("Low battery, please plug in!");
} else if (batteryLevel >= 80) {
  console.log("Battery almost full.");
} else {
  console.log("Battery normal.");
}

for (let step = 5; step >= 1; step--) {
  console.log(`Countdown: ${step}`);
}
console.log("Launch!");

let tracker = 1;
while (tracker <= 100) {
  console.log(`Current value: ${tracker}`);
  tracker *= 2;
}

function calculateArea(width, height) {
  return width * height;
}
console.log("Area:", calculateArea(6, 4));

function isPrime(num) {
  if (num <= 1) return false;
  for (let factor = 2; factor < num; factor++) {
    if (num % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log("Is 7 prime?", isPrime(7));
console.log("Is 12 prime?", isPrime(12));

function canDrive(userAge) {
  if (userAge >= 18) {
    return "Eligible to drive";
  }
  return "Too young to drive";
}
console.log(canDrive(17));
console.log(canDrive(22));

const studentScores = [85, 62, 45, 90, 73, 55, 38, 100];
const count = studentScores.length;
console.log(`Total scores: ${count}`);

let scoreSum = 0;
for (let idx = 0; idx < studentScores.length; idx++) {
  scoreSum += studentScores[idx];
}
const classAverage = scoreSum / count;
console.log(`Average score: ${classAverage}`);

let topScore = studentScores[0];
for (let idx = 0; idx < studentScores.length; idx++) {
  if (studentScores[idx] > topScore) {
    topScore = studentScores[idx];
  }
}
console.log(`Highest score: ${topScore}`);

let lowestScore = studentScores[0];
for (let idx = 0; idx < studentScores.length; idx++) {
  if (studentScores[idx] < lowestScore) {
    lowestScore = studentScores[idx];
  }
}
console.log(`Lowest score: ${lowestScore}`);

let passedStudents = 0;
let failedStudents = 0;

for (let idx = 0; idx < studentScores.length; idx++) {
  if (studentScores[idx] >= 50) {
    passedStudents++;
  } else {
    failedStudents++;
  }
}
console.log(`Passed count: ${passedStudents}`);
console.log(`Failed count: ${failedStudents}`);
