
const Qty = document.querySelector("#QtyProduct");
const Price = document.querySelector("#ProductsPrice");
const form = document.querySelector("#TotalizatorForm");
const ansDiv=document.querySelector("#AnswerDiv")
form.addEventListener("submit",(event)=>
{
    event.preventDefault()
    ansDiv.innerHTML="<p>"+"Cantidad: "+Qty.value+"<br>Precio:"+Price.value+"</p>"
});
