/*
let a=3;
let b=5;
const temp=a;
a=b;
b=temp;
console.log(a,b)


//without temp variable
let x=5;
let y=8;
[x,y]=[y,x];
console.log(x,y)

function randomIntFromInterval(min, max) { // min and max      included 
    console.log(Math.random())
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
  const rndInt = randomIntFromInterval(10, 20)
  console.log(rndInt)

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
     console.log(i);
  }, 100);
}
*/   

console.log(Math.ceil(7.0004))
console.log(Math.ceil(-7.0004))
console.log(Math.ceil(.95))

let x=3;
let y='sdk'

let temp=x;
x=y;
y=temp
console.log(x,y)
