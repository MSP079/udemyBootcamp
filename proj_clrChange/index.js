const btn = document.getElementById("clrbtn");
const h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
    const newClr = makeRandomClr();
    document.body.style.backgroundColor = newClr;
    h1.innerHTML = newClr;
});


const makeRandomClr = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


const clrInverseFont = () => {
    
}