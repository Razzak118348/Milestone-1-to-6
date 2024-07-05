const numbers = [343, 345, 35, 23, 24, 53]
//you can double this array item using for loop

function doubleIt(num) {
    // console.log(num)
    return num * 2;
}
const final = numbers.map(doubleIt)
console.log(final)

// the same thing you can do by arrow function 
const double2 = a => a * 2;
// const double2= (a)=>a*2;
const result = numbers.map(double2)
console.log(result)
//this map do the opetation and save internally in a array and finaly return the array.

// another way .. that is efficient 
const output = numbers.map(n => n * 2)
console.log(output)

const half = numbers.map(x => x / 2)
console.log(half);


const name = ['elle', 'alamin', 'rafa', 'sumaiya'];
const length = name.map(array => array.length)
console.log(length)
//print the length of each index..character size..all the length will concore in a array..

const firestLetter = name.map(x => x[0]);
// [ 'e', 'a', 'r', 's' ] protita element er first letter print hobe ekta arry te..
console.log(firestLetter)

const lastLetter = name.map(n => n[n.length - 1])
console.log(lastLetter)

const middle= name.map(a=>a[parseInt(a.length/2) -1])
console.log(middle)