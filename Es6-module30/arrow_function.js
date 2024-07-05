const getAge = (person)=> person.age;
const student ={
 name:'abdur razzak',
 age:23,
}
// bracket on parameter 
const age =getAge(student)
console.log(age);


//index
// without bracket in parameter
const getThird= numbers =>numbers[2]
const array = getThird([4,53,55,34,34])
console.log(array)

//
// const doubleIt=num=>num*2;

//
const getPI = () => Math.PI;
console.log(getPI)


//large arrow function
const doMath = (x,y,z)=>{
    const sum = x+y+z;
    const mul =x*y*z;
    const result=sum+mul;
    return result;
}
