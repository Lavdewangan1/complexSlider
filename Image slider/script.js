const container = document.querySelector(".container")

window.onmousedown = e =>{
    container.dataset.mouseDownAt = e.clientX;
    container.dataset.prevPercentage = container.dataset.percentage;
}
window.onmousemove = e=>{
    if(container.dataset.mouseDownAt==="0")return;
    const move = parseFloat(container.dataset.mouseDownAt) - e.clientX, max = window.innerWidth/2;
    const percentage = (move/max)*(-100);
    const nextPercentage = parseFloat(container.dataset.prevPercentage) + percentage;

    if(nextPercentage>=0)return;
    if(nextPercentage<=-100)return;
    container.dataset.percentage = nextPercentage;
    container.style.transform = `translate(${nextPercentage}%, -50%)`;

    for(const image of document.getElementsByClassName('image')){
        image.style.objectPosition = `${nextPercentage + 100}% 50%`
    }
}
window.onmouseup = e=>{
    container.dataset.mouseDownAt = "0";
    
}