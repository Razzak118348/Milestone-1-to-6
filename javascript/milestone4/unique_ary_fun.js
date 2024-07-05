const array=['amm','jam','kathal','amm','jam','boroi'];

function noDuplicate(ary){
    const unique=[];
    for(const item of ary)
    {
        if(unique.includes(item)===false){
            unique.push(item);
        }
    } 
    return unique;
}

console.log(noDuplicate(array));