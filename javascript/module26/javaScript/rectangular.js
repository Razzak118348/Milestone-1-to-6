function calculateRectangleArea(){
     //width
     const ractanglewidthInput=document.getElementById('rectangle-width');
     const ractanglewidthText=ractanglewidthInput.value ;
      const width =parseFloat(ractanglewidthText);
 
      //length
      const ractanglelengthInput=document.getElementById('rectangle-length');
      const ractanglelengthText=ractanglelengthInput.value;
      const length=parseFloat(ractanglelengthText);
 
     const area=width*length;
   
     // display ractangle area 
     const ractangleArea=document.getElementById('area-section');
     ractangleArea.innerText=area;
    

 
}