import getSubTotalPrice from "./TotalPriceCalculator";
import getTax from "./taxCalculator";
const Qty = document.querySelector("#QtyProduct");
const Price = document.querySelector("#ProductsPrice");
const form = document.querySelector("#TotalizatorForm");
const ansDiv=document.querySelector("#AnswerDiv")
form.addEventListener("submit",(event)=>
{
    let QtyValue=Qty.value
    let PriceValue=Price.value
    let SubTotalPrice=getSubTotalPrice(QtyValue,PriceValue)
    event.preventDefault()
    ansDiv.innerHTML=("<p>"+
    "Cantidad: "+QtyValue+
    "<br>Precio: "+PriceValue+
    "<br>Monto: "+SubTotalPrice+
    "<br>Tax TX: "+getTax(SubTotalPrice,"TX")+
    "</p>")
});
