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