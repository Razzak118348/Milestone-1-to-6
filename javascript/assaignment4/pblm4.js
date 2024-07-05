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

// let obj1=password({name:'komiluddin',birthYear:2333,siteName:'google'})

// let obj2=password({ name: "rahat", birthYear: 2002, siteName: "Facebook" })

// let obj3=password({ name: "toky", birthYear: 200, siteName: "Facebook" })
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)