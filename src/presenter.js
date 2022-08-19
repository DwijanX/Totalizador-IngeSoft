import { getSubTotalPrice,getTotalPrice} from "./TotalPriceCalculator";
import getTax from "./taxCalculator";
const Qty = document.querySelector("#QtyProduct");
const Price = document.querySelector("#ProductsPrice");
const StateCode = document.querySelector("#StateCode");
const form = document.querySelector("#TotalizatorForm");
const ansDiv=document.querySelector("#AnswerDiv")
form.addEventListener("submit",(event)=>
{
    let QtyValue=Qty.value
    let PriceValue=Price.value
    let SubTotalPrice=getSubTotalPrice(QtyValue,PriceValue)
    let TaxAmount=getTax(SubTotalPrice,StateCode.value)
    let TotalPrice=getTotalPrice(SubTotalPrice,TaxAmount)
    event.preventDefault()
    ansDiv.innerHTML=("<p>"+
    "Cantidad: "+QtyValue+
    "<br>Precio: "+PriceValue+
    "<br>Monto: "+SubTotalPrice+
    "<br>Tax "+StateCode.value+": "+TaxAmount+
    "<br>Monto Total "+TotalPrice+
    "</p>")
});
