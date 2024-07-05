const today=new Date();
console.log(today);

const date =new Date('2024-6-10');
console.log(date);
console.log(date.getMonth())
console.log(date.getDay());
// date month hour er index diye sob hisab kora hoy  

const specificDate= new Date(2024,5,11) //year 2024,,month (5+1)=6,, date 11-1=10;;string index dekhay

console.log(specificDate);
specificDate.setMonth(8);
console.log(specificDate);
console.log(specificDate.toLocaleString('en-GB'));//date-11,,month-9,,year-2024

//  unix epoc : 
