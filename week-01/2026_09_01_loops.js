for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 10; i >= 1; i--) {
    console.log(i);
}


let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


let x=7;
for ( let i=1 ; i<=10 ; i++ ) { 
    console.log( `${x} ×  ${i}  =  ${x * i}` );
}


for(let i=1;i<=5;i++){
    console.log("Seema");
}


let target=100;
let i=1;
while (i <= target*2) {
    console.log(i);
    i = i * 2;
}



for (let i=1; i<=30; i++) {
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    else if (i%3===0){
        console.log("Fizz");
    }
    else if (i%5===0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

