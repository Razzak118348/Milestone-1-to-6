let sentence = 'I am learning web dev.';

//way 1st 

// let revers='';
// for(const  letter of sentence){
// //   console.log(letter);
//     revers=letter + revers;
//     console.log(revers);
// }
// console.log('the last revers sentence :', revers);


//for loop 

// let rev='';
// for(let i=0;i<sentence.length;i++){
//    const letter =sentence[i];
//     rev=letter + rev;
// }
// console.log(rev);


// shortcut 
const reversed=sentence.split('').reverse().join('');
console.log(reversed);