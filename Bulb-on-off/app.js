const btnOn = document.querySelector("#on");
const btnOff = document.querySelector("#off");
const bulb = document.querySelector("#img");


btnOn.addEventListener("click",()=>{
    bulb.src = "./bulbOn.jpg";
    btnOn.disabled = true;
    btnOff.disabled = false;
})
btnOff.addEventListener("click",()=>{
    bulb.src = "./bulbOff.png";
    btnOff.disabled = true;
    btnOn.disabled = false;
})
