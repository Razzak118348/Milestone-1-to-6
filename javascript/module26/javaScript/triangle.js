/* 
*objective: get base and height and calculate the area by given formula


*/


function claculateTriangleArea(){
    //base
     const triangleBaseInput=document.getElementById('triangle-base');
     const triangleBaseText=triangleBaseInput.value ;
      const base =parseFloat(triangleBaseText);
 
      //height
      const triangleHeightInput=document.getElementById('triangle-height');
      const triangleHeightText=triangleHeightInput.value;
      const height=parseFloat(triangleHeightText);
 
     const area=0.5*base*height;
     console.log(area)
 
          // display triangle area 
          const triangleArea=document.getElementById('area-section');
          triangleArea.innerText=area;
        
     
 }