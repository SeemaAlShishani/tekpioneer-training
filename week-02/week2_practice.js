const studentPractice1 = {
  name: "Leen",
  age: 22,
  major: "Computer Science",
};
console.log(studentPractice1.name);
console.log(studentPractice1.major);

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
  genres: [ "Action", "Sci-Fi", "Drama"],
};
console.log(moviePractice3.title);
console.log(
    `first genre is ${moviePractice3.genres[0]}, last genre is ${moviePractice3.genres[2]}`
);