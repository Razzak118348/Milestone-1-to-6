const max =Math.max(5,53,34,23,2432,453,344)
// console.log(max)

const numbers=[3,353,53,32,23,43,23]
const arryMx=Math.max(numbers)
// console.log(arryMx)

// console.log(...numbers)

//the three dot is spreed operatoer ,,we get only number if we giv spreed operator;

const ar=Math.max(...numbers)
// console.log(ar)

//use spread operator to copy 
const friends =[2,3,5,3,2]
const bondu= friends;
bondu.push(12)
// console.log(bondu)
// console.log(friends)

//12 also include in the friends array because the freind array location is assaigned in bondu array .. and bondu array r modde 12 push kora mane friends array r location e 12 push kora

//the array is non primitive data

const dosto = [friends]
console.log(dosto)

const yaar= [...friends]

console.log(yaar)
console.log(...yaar)
//spread operator seperate the value from friend and construct a new array yaar .

friends.push(1999)
console.log(...friends)
console.log(...friends,3453)


