const name = "Seema";

console.log(name.toUpperCase());
console.log(name.toLowerCase());

const sentence = "I love learning JavaScript";

const words = sentence.split(" ");
console.log(words.length);

const email = "  Seema@Example.COM  ";

const cleanEmail = email.trim().toLowerCase();
console.log(cleanEmail);

const word = "jAVASCRIPT";
const firstLetter = word[0].toUpperCase();
const restOfWord = word.slice(1).toLowerCase();

console.log(firstLetter + restOfWord);

const message = "I enjoy learning HTML";
const newMessage = message.replace("HTML", "JavaScript");

console.log(newMessage);

const fullName = "Seema Yousef Al Shishani";
const nameParts = fullName.split(" ");

const initials = nameParts.map((name) => name[0]).join(".");

console.log(initials);

function countWords(sentence) {
  return sentence.split(" ").length;
}

console.log(countWords("I am learning JavaScript"));
