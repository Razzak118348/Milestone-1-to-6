// where to add a element 
const placeslist=document.getElementById('places-list')

//what to be added
const li =document.createElement('li');
li.innerText='sent-martin';

//add the child
placeslist.appendChild(li);



// 1.where to add 
const mainContainer=document.getElementById('main-container');

// 2.what to be added 
const sectn=document.createElement('section');


const h1=document.createElement('h1');
h1.innerText='My food List';
sectn.appendChild(h1);

const ul =document.createElement('ul');


const li1=document.createElement('li');
li1.innerText='Rice';
ul.appendChild(li1)


const li2=document.createElement('li');
li2.innerText='Biriani';
ul.appendChild(li2);


const li3=document.createElement('li');
li3.innerText='Salad';
ul.appendChild(li3);

sectn.appendChild(ul);
mainContainer.appendChild(sectn);


// set inner html directly

const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1> My dress section</h1>
<ul>
    <li>T shart</li>
    <li>shart</li>
</ul>

`

mainContainer.appendChild(sectionDress);