const students = [
  { name: "Lina", grade: 92 },
  { name: "Omar", grade: 45 },
  { name: "Sara", grade: 78 },
  { name: "Khalid", grade: 55 },
  { name: "Noor", grade: 88 },
];
console.log(students.length);

let sum = 0;
for (let i = 0; i < students.length; i++) {
  sum += students[i].grade;
}
let average = sum / students.length;

console.log(average);

let topStudent = students[0];

for (let i = 0; i < students.length; i++) {
  if (students[i].grade > topStudent.grade) {
    topStudent = students[i];
  }
}

console.log(topStudent.name);

const passingNames = students
  .filter((student) => student.grade >= 50)
  .map((student) => student.name);
console.log(passingNames);

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
const gradeLines = students.map(
  (student) =>
    `${student.name} — ${student.grade} — ${gradeWord(student.grade)}`,
);

console.log(gradeLines);

const uppercaseNames = students.map((student) => student.name.toUpperCase());

console.log(uppercaseNames);

const studentInfo = students.map(
  (student) => `${student.name[0]} — ${student.grade}`,
);

console.log(studentInfo);

const sortedStudents = students.sort((a, b) => b.grade - a.grade);

console.log(sortedStudents);
