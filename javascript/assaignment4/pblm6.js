//first ..
function calculateMoney(ticketSale) {
    if(ticketSale<0){
        return 'Invalid Number';
    }
    else{
        let RemainingMoney=((ticketSale*120)-(500+(8*50)));
        return RemainingMoney;
    }
  
}

//second 
function checkName(name){
    if(typeof(name)!=='string'){
        return '  Invalid Name.Please Enter a Valid string  Name!!!'
    }
    else{
        name=name.toLowerCase();
        let last_letter=name[name.length-1]
    //a, y, i , e , o , u, w
        if(last_letter=='a'|| last_letter=='e'||last_letter=='i'||last_letter=='o'||last_letter=='u'||last_letter=='w'||last_letter=='y'){
            return 'Good Name';
        }
        else{
            return 'Bad Name';
        }
    }
}

//third
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

//fourth
function password(obj) {
   
    if(!obj.name|| !obj.birthYear|| !obj.siteName||obj.birthYear<1000){
        return 'Invalid.Please enter the input correctly!!';
    }
    else{
        let site=obj.siteName[0].toUpperCase()+obj.siteName.slice(1);
        // if i use slice(1,4) then the start position of lowercase is index1 and the end position is 4.

        let pass= site+'#'+obj.name+'@'+obj.birthYear;

        return pass;
    }
}

//five
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

