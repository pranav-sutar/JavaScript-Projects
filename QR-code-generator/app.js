let link = document.querySelector("#url");
let btn = document.querySelector("#btn");
let QR = document.querySelector("#img");
data = link.value;

btn.addEventListener("click",()=>{
    QR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link.value}`;
    console.log("working");
    QR.classList.add("after");
})
