//primitive data type
const that=35;

//non primitive data type
const subject={
    name:'Biology',
    teacher:'Abdur Razzak',
    exam_date:23 +'january',
    chapter: ['first','second','third'],
    number:34,
    exam:{
        name:'final exam',
        marks:100,
    },
  'fav places':['kuakata','sajek','cox_bazar'],

}
console.log(subject);
console.log(subject.teacher)

// 2nd way 
const date=subject.exam_date;
console.log(date)

// 3rd way 
console.log(subject['number'])
const position=subject['number'];
console.log(position)

//4th way
console.log(subject['fav places'])

// you can change the property value 
subject['fav places'] = ['maldivs','india','nepal'];
console.log(subject['fav places']);


// to see the nested of the Object thing 
console.log(subject.exam.name)

// array index access 
console.log('   this is 2nd index of the chapter :',subject.chapter[1])

console.log('  this is the 2nd index place of fav places :',subject["fav places"][1])

// to see the all property 
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

// delete computer.brand;
// const key=Object.keys(computer);
// console.log(key);


// for of :array 
// for in : Object 
for(const item in computer){
    console.log(item); //property
    console.log(computer[item]) //value
}
