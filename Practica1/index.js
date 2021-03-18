let paragraph = document.getElementById("mainparagraph");
let btnNumeric=document.getElementById("numeric")
let btnText = document.getElementById("Text")
btnNumeric.addEventListener("click",writenumericValue)
btnText.addEventListener("click",writeTextValue);
btnBool.addEventListener("click",writeBoolValue)

function writenumericValue(){
    let numericValue=2+2; //<--Tipo dato number
    paragraph.textContent=numericValue;
}

function writeTextValue(){
    let textValue = "Adrian Michel"; //<--tipo dato string
    paragraph.textContent = textValue
}

function writeBoolValue(){
    let boolValue = true; //<--1/0 1=true y 0=false boolean
    paragraph.textContent =boolValue
}