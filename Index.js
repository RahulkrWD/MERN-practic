console.log("hello");
let h2 = document.querySelector("h2");
let btn = document.createElement("button");
btn.innerText = "Click me!!"
let body = document.querySelector("body");
body.appendChild(btn);
btn.addEventListener("click", ()=>{
    h2.style.color = "red";
})