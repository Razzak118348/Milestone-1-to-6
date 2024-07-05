// const numbes=[23, 34, 45, 234, 23];
// console.log(numbes);

// for(const num of numbes){
//     console.log(num);
// }

// const fruits=['apple,banana,jackfruit'];

// for(const fruit of fruits)
// {
//     console.log(fruit);
// 

//******** While loop ********* */

// let num = 0;
// while (num < 5) {
//     console.log('the while condition is true');
//     num++;
// }

// for (let x = 0; x < 5; x++) {
//     console.log('this is number:', x);
// }

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 != 0)
//      {
//     console.log('the odd number is :', i); 
//     }
// }
const array=[1,2,3,4,5,6,7]
console.log(array.length)
for (let i = 1; i < array.length; i++) {
    if (i == 5) {
     continue;
    }
    console.log(array[i]);
   }



