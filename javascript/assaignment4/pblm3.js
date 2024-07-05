function deleteInvalids(array){
    // const array2=[332,{a:3},'sldk']
   let array3=[]; 
   if(Array.isArray(array)==false){
    return 'Invalid Array';
   }

   else{
    for(let item of array){
        if(typeof item ==='number'&& !isNaN(item)){
            array3.push(item);
        }
    }
   }
   return array3;
}

// let finalArray=deleteInvalids([323,323,{num3:3},NaN,'unnl',undefined,[1,232],-23]);
// let finalArray2=deleteInvalids(['2',23,323,-32])
// let finalArray3=deleteInvalids({a:1,b:2,})
// let finalArray5=deleteInvalids(['d2',{num:3},NaN])
// console.log(finalArray)
// console.log(finalArray2)
// console.log(finalArray3)
// console.log(finalArray5)