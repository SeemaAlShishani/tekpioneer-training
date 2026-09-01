for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}



for (let i = 2; i <= 30; i += 2) {
    console.log(i);
}



for (let i = 20; i>=1; i-=2) {
    console.log(i);
}



let sum=0;
for (let i=0 ; i<=50; i++){
    sum+=i;
}
console.log(sum);



let x=5;
for (let i = 1; i<=10; i++){
    console.log(`${x} x ${i} = ${x*i}`);
}


 
for (let i = 1; i<=20 ; i++){
    if (i%2===0) {
        console.log(`${i}`+ " is even")}
    else {
        console.log(`${i}`+ " is odd");

    }    
}



for(let i =1; i<=50 ; i++){
    if(i%5===0){
        console.log("five");
    }
    else {
        console.log(i);
    }
}



let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}



let total=0;
for ( let i = 2 ; i<=20 ; i+=2){
    total +=i;
}
console.log(total);



let a=15;
let b=27;
if (a>b){
    console.log(`${a} is greater than ${b}`);
}
else {
    console.log(`${b} is greater than ${a}`);
}



let name = "Seema";
let age = 19 ;
let major = "Computer Science";
let grade=96;
console.log(`My name is ${name},I am ${age} years old,and I study ${major}`);

if(grade>=50){
    console.log("pass");
}


let f=12;
let g=4;

console.log(f+g);
console.log(f-g);
console.log(f*g);
console.log(f/g);
console.log(f%g);



let price = 15;
let quantity = 6;
console.log(`The total is ${price * quantity}`);



console.log(typeof 25);
console.log(typeof "25");
console.log(typeof false);



let number=17;
if(number%2===0){
    console.log("even");
}
else 
{ console.log("odd") };



let n=24;
if(n%2===0){
    console.log("even");
}
else 
{ console.log("odd") };



let mark = 44;
if(mark >=50){
    console.log("pass"); }
else{
        console.log("fail");
}



let p = 35;
let y = 28;
if(p>y){
    console.log(p);
}
else{
    console.log(y);
}


let temperature = 18;
if(temperature>=30){
    console.log("Hot");
}
else if (temperature>=15){
    console.log("Nice");
}
else {
    console.log(Cold);
}
