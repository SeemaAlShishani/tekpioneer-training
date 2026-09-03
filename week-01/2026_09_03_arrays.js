let favFood = ["spaghetti","mansaf","pizza","burger","shawarma"]
for (let i = 0; i <= 4; i++){
    console.log(favFood[i]);
}



let numbers = [3, 7, 2, 9, 4];
console.log(numbers[0]);
console.log(numbers[4]);
console.log(numbers.length);



numbers.push(8 , 5);
console.log(numbers);



let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);



let biggest = numbers[0];
for (let i = 0; i < numbers.length; i++){
       if (numbers[i] > biggest){
          biggest = numbers[i];      
        }
}
console.log(biggest);



let grades = [85, 62, 45, 90, 73, 55, 38, 100];
console.log(grades.length);



let total = 0;

for (let i = 0; i < grades.length; i++){
 total += grades[i];
}
let average = total/grades.length;
console.log(average);



let highest = grades[0];
for (let i = 0; i < grades.length; i++){
       if (grades[i] > highest){
          highest = grades[i];      
        }
}
console.log(highest);



let lowest = grades[0];
for (let i = 0; i < grades.length; i++){
       if (grades[i] < lowest){
          lowest = grades[i];      
        }
}
console.log(lowest);



let pass = 0;
for (let i = 0; i <= 7; i++){
    if (grades[i] >= 50){
        pass += 1;
    }
}
console.log(pass);



function gradeWord(mark){
    if (mark >= 90){
        return "Excellent";
    }
    else if (mark >= 80){
        return "Very good";
    }
    else if (mark >= 70){
        return "Good";
    }
    else if (mark >= 50){
        return "Pass";
    }
    else {
        return "Fail";
    }
 }
 for (let i = 0; i < grades.length; i++){
    console.log(grades[i]+" "+gradeWord(grades[i]));
 }
