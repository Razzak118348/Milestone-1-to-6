function monthlySavings(arr , livingCost){
    if(Array.isArray(arr)===false && typeof livingCost!=="number"){
        return 'Invalid Input';
    }
    else{
        let sum=0;
        for(let item of arr){
            if(item>=3000){
               let discount= (item*20)/100;
               let money=item-discount;
                sum=sum+money;
            }
            else{
                sum=sum+item;
            }
        }
       let reaminig= sum-livingCost;
        if(reaminig>=0){return reaminig;}
        else{
            return "earn more.";
        }
    }
}

// const remainingMoney=monthlySavings([1000,2000,3000],5400);
// const remainingMoney2=monthlySavings([900,2700,3400],100000)
// const remainingMoney3=monthlySavings(100,[3323,323233,323])
// console.log(remainingMoney);
// console.log(remainingMoney2);
// console.log(remainingMoney3);
