import { getSubTotalPrice,getTotalPrice} from "./TotalPriceCalculator";
import {getTax} from "./taxManager";
import {loadStates} from "./TaxesValuesLoader";
import getDiscount from "./discountManager";
import validateIfValuesIsNumber from "./ValuesValidator";
const Qty = document.querySelector("#QtyProduct");
const Price = document.querySelector("#ProductsPrice");
const StateCodeCombo = document.querySelector("#StateCode");
const form = document.querySelector("#TotalizatorForm");
const ansDiv=document.querySelector("#AnswerDiv")
const AlertDiv=document.querySelector("#AlertDiv")
document.onload=loadStates()
Qty.addEventListener("input",()=>validateIfValuesIsNumber(Qty.value))
Price.addEventListener("input",()=>validateIfValuesIsNumber(Price.value))
form.addEventListener("submit",(event)=>
{
    event.preventDefault()
    let SelectedTaxState=StateCodeCombo.options[StateCodeCombo.selectedIndex].text;
    let QtyValue=Qty.value
    let PriceValue=Price.value
    let SubTotalPrice=getSubTotalPrice(QtyValue,PriceValue)
    let TaxAmount=getTax(SubTotalPrice,SelectedTaxState)
    let Discount=getDiscount(SubTotalPrice)
    let TotalPrice=getTotalPrice(SubTotalPrice,TaxAmount,Discount)

    ansDiv.innerHTML=("<p>"+
    "Cantidad: "+QtyValue+
    "<br>Precio: "+PriceValue+
    "<br>Monto: "+SubTotalPrice+
    "<br>Tax "+StateCode.value+": "+TaxAmount+
    "<br>Descuento: "+Discount+
    "<br>Monto Total "+TotalPrice+
    "</p>")
});
