const add = function(a,b){
    return a+b;
}

console.log(add(4,5));

// arrow function
const add2 =(a,b) => a+b;

const add4 =(num1,num2,num3,num4) =>num1+num2+num3*num4;

const sum2=add4(33,34,5,53,5)
console.log(sum2)

const sum = add2(8,9)
console.log(sum)

const nk=a=>a*a;
const s=nk(8);
console.log(s);