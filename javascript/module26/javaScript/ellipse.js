function calculateEllipseArea(){
    const base = getInputvalueById('ellipse-a');
    const height=getInputvalueById('ellipse-b');
     
    const area=3.1416*base*height;
    // display area 
   setInnerTextById('area-section',area);


}

function getInputvalueById(InputField){
    const ellipsehInput=document.getElementById(InputField);
    
    const ellipseValue =ellipsehInput.value ;
    const ellipseFloat=parseFloat(ellipseValue);

    return ellipseFloat;
   
}

function setInnerTextById(Id,Area){

    // ellipseArea.innerText=Area;
    const areaSection=document.getElementById(Id);
    areaSection.innerText=Area;
}