
const LoadData =()=>
{
    return new Promise((resolve,reject)=>{

        const success= Math.random();
        if(success<0.5){
            resolve(success);
        }
        else{
            reject(success);
        }
    })
}
const item=10;
for(let i=0;i<10;i++){
    LoadData();
}