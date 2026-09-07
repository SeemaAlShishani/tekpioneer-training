const student = {
  name: "Seema",
  age: 19,
  university: "Jerash Private University",
};
console.log(
  `My name is ${student.name}, I am ${student.age} years old, and I study at ${student.university}`,
);
student.age = 20;
student.major = "Computer Networks";
console.log(student);

const book = {
  title: "JavaScript Basics",
  pages: 150,
  isRead: true,
};
if (book.isRead) {
  console.log(`Done: ${book.title}`);
} else {
  console.log(`Reading: ${book.title}`);
}

const studentGrades = {
  name: "Nour",
  grades: [85, 90, 73],
};

console.log(
  `${studentGrades.name}: first grade = ${studentGrades.grades[0]}, last grade = ${studentGrades.grades[2]}`,
);

const students = [
  { name: "Bana", grade: 85 },
  { name: "Lana", grade: 45 },
  { name: "Sara", grade: 78 },
];

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].name}: ${students[i].grade}`);
}

function describe(student) {
  return `${student.name} is a student with a grade of ${student.grade}`;
}

const studentInfo = {
  name: "Bana",
  grade: 85,
};

console.log(describe(studentInfo));

const studentsNames = [
  { name: "Leen", age: 19 },
  { name: "Dana", age: 22 },
  { name: "Mera", age: 20 },
];

function oldest(studentsNames) {
  let oldestStudent = studentsNames[0];

  for (let i = 1; i < studentsNames.length; i++) {
    if (studentsNames[i].age > oldestStudent.age) {
      oldestStudent = studentsNames[i];
    }
  }

  return oldestStudent.name;
}

console.log(oldest(studentsNames));
