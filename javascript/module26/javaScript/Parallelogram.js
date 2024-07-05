function calculateParallelogramAr(){
    const base = getInputvalueById('Parallelogram-base');
    const height=getInputvalueById('parallelogram-height');
     
    const area=base*height;
    // display area 
   setInnerTextById('area-section',area);


}

function getInputvalueById(InputField){
    const ParallelogramhInput=document.getElementById(InputField);
    
    const ParallelogramValue =ParallelogramhInput.value ;
    const ParallelogramFloat=parseFloat(ParallelogramValue);

    return ParallelogramFloat;
   
}

function setInnerTextById(Id,Area){

    // ParallelogramArea.innerText=Area;
    const areaSection=document.getElementById(Id);
    areaSection.innerText=Area;
}