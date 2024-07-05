const friend=['abdul','raju','rafa','sumaiya']

const countChar=(arry)=>{
console.log(arry)
console.log(...arry)
const element = arry[0]
console.log(element)
// const char =element[0]
// console.log(char)
const length =element.length;
// console.log(length)
const newArray=[];
for(const  element of arry)
{
//   console.log(element)
  const length=element.length;
  if(length % 2==0){
    newArray.push(element)
  }
  else{

  }

}
return newArray;
}

const name=countChar(friend)

console.log(name);

