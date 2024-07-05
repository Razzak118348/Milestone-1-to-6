const pen ={
    brand:'econo',
    price:10,
    color:'black',
}
const  pencil=new Object()
console.log(pencil)
const rubber=Object.create({})
console.log(rubber)

const computer = {
    brand:'lenovo',
    price:35000,
    processor:'intel',
    ssd:'512gb',
}
const keys=Object.keys(computer);
console.log(keys);
//for of: array
for(const i of keys){
    console.log(i, ':',computer[i] ,'|', 'type:',typeof(i));
}


const a='ad';
const b='dd';
const x=b.concat(a);
console.log(x)

let str = "Mississippi";
console.log(str.indexOf("i", 3));