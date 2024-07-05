const flag ={
    name:'flag',
    color:'red and green',
    price:400,
}

console.log(flag)

// here name ,color price is keys or property 
//here flag ,red and green ,400 is value

const property=Object.keys(flag)
// [ 'name', 'color', 'price' ]
console.log(property)

console.log(...property)

const valu= Object.values(flag)
//[ 'flag', 'red and green', 400 ]
console.log(valu)

// this give pair of the key and value 
const pair =Object.entries(flag)
console.log(pair) 
//this give array of array or 2 dimentional array...
// [ 
//     [ 'name', 'flag' ],
//   [ 'color', 'red and green' ],
//    [ 'price', 400 ]
//  ]


//delete an keys and it's value;
delete flag.price;
console.log(flag);
// another way 
const {color ,...shortflag}=flag;
console.log(shortflag)

//freeze 
Object.freeze.apply(flag)
flag.source = 'bangladesh'
console.log(flag)
// Object.freeze(flag)

//if you freez then you can not change the valu of keys and values

flag.color='blue'
console.log(flag)

flag.length='10 meter'
console.log(flag)
delete flag.length;
console.log(flag)
