const body=document.querySelector("body")

function setColor(paramiter){
    body.style.background=paramiter;
}
function randomColor(){

    const red= Math.random(Math.round()*255)
    const green= Math.random(Math.round()*255)
    const blue= Math.random(Math.round()*255)

    const color= `rgb(${red}, ${green}, ${blue})`

    body.style.background=color;
}
