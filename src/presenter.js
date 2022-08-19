import { getSubTotalPrice,getTotalPrice} from "./TotalPriceCalculator";
import {getTax} from "./taxManager";
import {loadStates} from "./TaxesValuesLoader";
const Qty = document.querySelector("#QtyProduct");
const Price = document.querySelector("#ProductsPrice");
const StateCodeCombo = document.querySelector("#StateCode");
const form = document.querySelector("#TotalizatorForm");
const ansDiv=document.querySelector("#AnswerDiv")
document.onload=loadStates()
form.addEventListener("submit",(event)=>
{
    event.preventDefault()
    let SelectedTaxState=StateCodeCombo.options[StateCodeCombo.selectedIndex].text;
    let QtyValue=Qty.value
    let PriceValue=Price.value
    let SubTotalPrice=getSubTotalPrice(QtyValue,PriceValue)
    let TaxAmount=getTax(SubTotalPrice,SelectedTaxState)
    let TotalPrice=getTotalPrice(SubTotalPrice,TaxAmount)

    
    ansDiv.innerHTML=("<p>"+
    "Cantidad: "+QtyValue+
    "<br>Precio: "+PriceValue+
    "<br>Monto: "+SubTotalPrice+
    "<br>Tax "+StateCode.value+": "+TaxAmount+
    "<br>Monto Total "+TotalPrice+
    "</p>")
});
