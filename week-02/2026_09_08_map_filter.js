const numbers = [3, 7, 2, 9, 4];
const doubled = numbers.map((currentNumber) => currentNumber * 2);
console.log(doubled);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const grades = [85, 62, 45, 90, 73, 55, 38, 100];
const passingGrades = grades.filter((grade) => grade >= 50);
console.log(passingGrades);
console.log(passingGrades.length);

let passed = 0;
for (let i = 0; i < grades.length; i++) {
  if (grades[i] >= 50) {
    passed += 1;
  }
}
console.log(passingGrades.length, passed);

function gradeWord(mark) {
  if (mark >= 90) {
    return "Excellent";
  } else if (mark >= 80) {
    return "Very good";
  } else if (mark >= 70) {
    return "Good";
  } else if (mark >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
const gradeLines = grades.map((grade) => `${grade} — ${gradeWord(grade)}`);
console.log(gradeLines);

const names = ["Seema", "dalia", "Lina", "Khawla", "Sara"];
const longNames = names.filter((name) => name.length > 4);
console.log(longNames);

const filteredGradeLines = grades
  .filter((grade) => grade >= 70)
  .map((grade) => `${grade} — ${gradeWord(grade)}`);

console.log(filteredGradeLines);

const students = [
  { name: "Bana", grade: 85 },
  { name: "Lana", grade: 45 },
  { name: "Sara", grade: 78 },
];
const passingStudents = students
  .filter((student) => student.grade >= 50)
  .map((student) => student.name);

console.log(passingStudents);
