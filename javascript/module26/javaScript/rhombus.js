function calculateRhombusArea() {
    const diagon1 = getInputvalueById('rhombus-diagon1');
    const diagon2 = getInputvalueById('rhombus-diagon2');

    const area = 0.5 * diagon1 * diagon2;
    // display area 
    setInnerTextById('rhombus-area', area);
}

function getInputvalueById(InputField) {
    const rhombushInput = document.getElementById(InputField);

    const rhombusValue = rhombushInput.value;
    const rhombusFloat = parseFloat(rhombusValue);

    return rhombusFloat;
}

function setInnerTextById(Id, Area) {
    const areaSection=document.getElementById(Id);
    areaSection.innerText=Area;
}
