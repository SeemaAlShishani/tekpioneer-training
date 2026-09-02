function greet(){
    console.log("Hello, Seema");
}
greet();



function square(n){
    return n * n;
}
console.log(square(3));
console.log(square(8));



function isEven(n){
    if (n % 2 === 0){
        return true;  
    }
    else {
        return false;
    }
}
console.log(isEven(2));
console.log(isEven(5));



function biggest(a , b){
    if (a > b){
        return a;
    }
    else {
        return b;
    }
}
console.log(biggest(15 , 10));
console.log(biggest(4 , 8));



function sumTo(n){
  
   let sum = 0;
   for (let i = 1; i <= n; i++){
     sum += i;
   }
   return sum;
}
console.log(sumTo(100));
console.log(sumTo(20));



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
 console.log(gradeWord(80));
 console.log(gradeWord(61));
 console.log(gradeWord(44));



function table(){
    let x = 7;
    for (let i = 1; i <= 10; i++){
        console.log(`${x} x ${i} = ${x * i}`);
    }
}

table();



function evenNumbers(){
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}

evenNumbers();