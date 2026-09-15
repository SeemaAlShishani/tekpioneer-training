const studentPractice1 = {
  name: "Leen",
  age: 22,
  major: "Computer Science",
};
console.log(studentPractice1.name);
console.log(studentPractice1.major);
console.log(studentPractice1["age"]);

const carPractice2 = {
  brand: "Toyota",
  year: 2020,
};
carPractice2.year = 2022;
carPractice2.color = "Black";
console.log(carPractice2);

const moviePractice3 = {
  title: "The Matrix",
  rating: 8,
  genres: ["Action", "Sci-Fi", "Drama"],
};
console.log(moviePractice3.title);
console.log(
  `first genre is ${moviePractice3.genres[0]}, last genre is ${moviePractice3.genres[2]}`,
);

const studentPractice4 = [
  { name: "Bana", grade: 85 },
  { name: "Sara", grade: 78 },
  { name: "Lina", grade: 92 },
  { name: "Noor", grade: 66 },
];

for (let i = 0; i < studentPractice4.length; i++) {
  console.log(`${studentPractice4[i].name}: ${studentPractice4[i].grade}`);
}

const studentTest1 = {
  name: "Aya",
  age: 20,
  major: "Computer Networks",
};

console.log(studentTest1.name);

const bookTest2 = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  pages: 350,
};
console.log(bookTest2.title);
console.log(bookTest2["pages"]);

const carTest3 = {
  brand: "Honda",
  year: 2021,
};
carTest3.year = 2024;
carTest3.color = "white";
console.log(carTest3);

const movieTest4 = {
  title: "Avatar",
  year: 2009,
  genres: ["Action", "Adventure", "Fantasy"],
};
console.log(movieTest4.genres[0]);

const studentsTest5 = [
  { name: "Maya", grade: 90 },
  { name: "Rana", grade: 75 },
  { name: "Huda", grade: 88 },
];
for (let i = 0; i < studentsTest5.length; i++) {
  console.log(`${studentsTest5[i].name}: ${studentsTest5[i].grade}`);
}

const numbersTest6 = [3, 7, 2, 9, 4];
const doubledTest6 = numbersTest6.map((number) => number * 2);
console.log(doubledTest6);

const numbersTest7 = [3, 7, 2, 9, 4, 10, 15];
const evenTest7 = numbersTest7.filter((number) => number % 2 === 0);
console.log(evenTest7);

const foodsTest8 = ["Pizza", "Mansaf", "Burger", "Shawarma"];
console.log(foodsTest8.includes("Mansaf"));

const gradesTest9 = [85, 62, 45, 90, 73, 55, 38, 100];
const passingGrades = gradesTest9.filter((number) => number >= 50);
console.log(passingGrades.length);

const studentsTest10 = [
  { name: "Lama", grade: 91 },
  { name: "Dana", grade: 76 },
  { name: "Reem", grade: 88 },
];
const studentNamesTest10 = studentsTest10.map((student) => student.name);
console.log(studentNamesTest10);

const studentsTest11 = [
  { name: "Maya", grade: 90 },
  { name: "Rana", grade: 45 },
  { name: "Huda", grade: 88 },
  { name: "Sara", grade: 40 },
];
const passingStudentsTest11 = studentsTest11.filter((student) => student.grade >= 50);
console.log(passingStudentsTest11);

