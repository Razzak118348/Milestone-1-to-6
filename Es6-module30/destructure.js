const actor ={
    name:'Razzak ',
    age:23,
    phone:'0125555555555',
    money:12225522,
}

// if right sid eis an Object left side of destructuring will be Object as well 
// use property name as a variable that contains the property value 

const {} = actor; 

// const phone = actor.phone;
// const name =actor.name;
const {phone,age:boyos} =actor;
console.log(boyos)//age ta boyos diye replace hoiya gese 

// this an another way to distruct the element of an array 
  const num=[23,423]
  const [first ,second]=num;
  console.log(first,second)
const [x,y]= [23,44]
//the x will assaign 23 and y assaign 44

function DoubleThem(a,b){
    return [a*2,b*2]
}

const [p,q] =DoubleThem(4,5)
console.log(p,q)
