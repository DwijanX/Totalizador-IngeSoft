import getTotalPrice from "./TotalPriceCalculator";

const Qty = document.querySelector("#QtyProduct");
const Price = document.querySelector("#ProductsPrice");
const form = document.querySelector("#TotalizatorForm");
const ansDiv=document.querySelector("#AnswerDiv")
form.addEventListener("submit",(event)=>
{
    let QtyValue=Qty.value
    let PriceValue=Price.value
    event.preventDefault()
    ansDiv.innerHTML=("<p>"+
    "Cantidad: "+QtyValue+
    "<br>Precio: "+PriceValue+
    "<br>Monto: "+getTotalPrice(QtyValue,PriceValue)+
    "</p>")
});
