function calculatePantagonArea(){
    const base = getInputvalueById('pentagon-p');
    const height=getInputvalueById('pentagon-b');
     
    const area=0.5*base*height;
    // display area 
   setInnerTextById('area-section',area);


}

function getInputvalueById(InputField){
    const pantagonhInput=document.getElementById(InputField);
    
    const pantagonValue =pantagonhInput.value ;
    const pantagonFloat=parseFloat(pantagonValue);

    return pantagonFloat;
   
}

function setInnerTextById(Id,Area){

    // pantagonArea.innerText=Area;
    const areaSection=document.getElementById(Id);
    areaSection.innerText=Area;
}