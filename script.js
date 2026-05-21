const btn= document.querySelector(".open-model");
const overLay=document.querySelector(".overlay");
const model=document.querySelector(".model");
const closeBtn=document.querySelector(".close-model-btn");
btn.addEventListener("click",function (){
    overLay.classList.remove("hidden");
    model.classList.remove("hidden");
})
// closeBtn.addEventListener("click",function removeOveray() {
//      overLay.classList.toggle("hidden");
//     model.classList.toggle("hidden");
// })
// overLay.addEventListener("click", function removeOveray(){
//     // overLay.classList.toggle("hidden");
//     // model.classList.toggle("hidden");
// })
// overLay.addEventListener("click",removeOveray())
overLay.addEventListener("click",close);
closeBtn.addEventListener("click",close);
model.addEventListener("click",close);
function close() {
    overLay.classList.toggle("hidden");
    model.classList.toggle("hidden");
}
