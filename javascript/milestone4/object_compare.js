const mobile=[
    {name:'Iphone',price:50000,camera:'19mp',color:'black'},
    {name:'samsung',price:40000,camera:'19mp',color:'black'},
    {name:'xoami',price:32000,camera:'19mp',color:'black'},
    {name:'oppo',price:17000,camera:'19mp',color:'black'},
    
]

function getCheapestPhone(mobile){
    let min=mobile[0];
    for(const phone of mobile ){
        if(phone.price < min.price){
            min=phone;// full object replace 
        }
    }
    return min;
}

const cheap=getCheapestPhone(mobile);
console.log(cheap);