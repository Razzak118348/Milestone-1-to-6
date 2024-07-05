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
// let cs=checkName(112);
// console.log(cs)
