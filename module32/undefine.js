/*
8 ways to get undefine:

no1: variable that not initialize will give undefined 

no2:function which 

no3:paramiter which will not pass will be undefined;

4: function which will not return anything;

5:the property which will not stay in the object will returen undefine

6:if the index of array will not have any value or larger then length it will give undefine ..

7:deleting an element indide an array
8:

*/

// 1
let first;
console.log(first)

// 2
function second(a,b)
{
    const total=a+b;
}
const result=second();
console.log(result)

// 3
function third(a,b,c,d){
    const total=a+b+c+d;
    console.log(a,b,c,d)

}
third(2,4,4)

// 4
function noNegative(a,b){
    if(a<0||b<0)
    {
        return;//we do not defin that what will be return;so it's give undefine value
    }
    return a+b;
}

const total=noNegative(3,-4)
console.log(total)

// 5
const fifth={id:3,name:'abul',age:33}
console.log(fifth.age,fifth.salary)

// 6
const sixth=[2,4,53,2,1,5]

console.log(sixth[1],sixth[10],sixth[300])//for 10 and 300 index it will give undefine;
delete sixth[1] 
console.log(sixth) //empty item 

// 8
const eight = undefined;

const nine =null;
const data ={
    result:[],
    update:null,
} 

 
