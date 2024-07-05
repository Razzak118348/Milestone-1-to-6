
console.log('this is separate js file');

//option 1:direct 
// <button onclick="document.body.style.backgroundColor='Yellow'" >Make Yellow </button>

// option 2 : add onclick function 
// <button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor='red'
}

//option 3: another
const makePurpleButton =document.getElementById('make-purple');
makePurpleButton.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';
}

//option 4;
/*
<button id="make-pink">Make Pink</button>

 const pinkButton = document.getElementById('make-pink');
    pinkButton.addEventListener('click',makePink)

    function makePink(){
        document.body.style.backgroundColor='pink'
    }

    //5th way 
    document.getElementById('make-goldenrod').addEventListener('click',function(){
        document.body.style.backgroundColor='goldenrod'
    })
*/ 