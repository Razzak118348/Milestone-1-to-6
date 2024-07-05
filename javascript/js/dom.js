const section =document.querySelectorAll('section');
for(const item of section){
   item.style.border='2px solid steelblue';
   item.style.marginBottom='5px';
   item.style.borderRadius='20px';
   item.style.backgroundColor='lightgray';
   item.style.textAlign='center';
   item.style.paddingLeft='10px';
}
const fruitContainer=document.getElementById('fruit-container');

fruitContainer.style.backgroundColor='yellow';