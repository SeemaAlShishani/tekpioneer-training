const student = {
  name: "Jana",
  age: 22,
  major: "Computer Science",
};
const studentText = JSON.stringify(student);
const prettyStudent = JSON.stringify(student, null, 2);
console.log(prettyStudent);

const studentJSON =
  '{ "name": "Sara", "age": 21, "major": "Computer Networks" }';
const studentObject = JSON.parse(studentJSON);
console.log(studentObject.name);

const originalStudent = {
  name: "Lama",
  age: 21,
  major: "Computer Networks",
};
const originalStudentText = JSON.stringify(originalStudent);
const copiedStudent = JSON.parse(originalStudentText);
console.log(copiedStudent === originalStudent);

copiedStudent.name = "Maya";
console.log(copiedStudent.name);
console.log(originalStudent.name);

//const badJSON="{'name':'Sara'}";
//const parsedBadJSON = JSON.parse(badJSON);
//console.log(parsedBadJSON);

const students = [72, 95, 61, 88, 43];
const studentsCopy = JSON.parse(JSON.stringify(students));

studentsCopy.sort((a, b) => b - a);
console.log(studentsCopy);
console.log(students);

const tasks = [
  {
    id: 1,
    text: "Study JSON",
    done: false
  },
  {
    id: 2,
    text: "Practice JavaScript",
    done: false
  },
  {
    id: 3,
    text: "Learn files",
    done: false
  }
];
const tasksText = JSON.stringify(tasks, null, 2);
console.log(tasksText);