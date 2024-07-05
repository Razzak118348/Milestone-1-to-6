// console.log(1)
// console.log(2)
// setTimeout(() => {
//     console.log('delay of 2 second',3)
    
// }, 2000);//2000 milisecond ;

// console.log(4)
// console.log(5)
// console.log(6)
let num=0;
const inteval = setInterval(() => {
  num++;
  console.log("I LOVE YOU RAFA", num ) 
 if(num===1000){
    clearInterval(inteval)
 }
},); 