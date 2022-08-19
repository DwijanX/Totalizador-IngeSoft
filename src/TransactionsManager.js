import { getSubTotalPrice,getTotalPrice} from "./TotalPriceCalculator";
import {getTax} from "./taxManager";
import getDiscount from "./discountManager";

const Qty = document.querySelector("#QtyProduct");
const Price = document.querySelector("#ProductsPrice");
const ansDiv=document.querySelector("#AnswerDiv")
const StateCodeCombo = document.querySelector("#StateCode");
const ProductsName=document.querySelector("#ProductsName")
const TransactionList=document.querySelector("#TransactionList")

function addTransactiontoList(Name,Qty,Price,SubTotal,Tax,Discount,Total)
{
    TransactionList.innerHTML+="<dt>"+Name+"</dt>"+"<dd>-cantidad:"+Qty+
    " SubTotal: "+Price+
    " Tax: "+SubTotal+
    " Descuento: "+Discount+
    " Total: "+Total+
    "</dd>"
}
function processNewTransactionTransaction()
{
    let SelectedTaxState=StateCodeCombo.options[StateCodeCombo.selectedIndex].text;
    let QtyValue=Qty.value
    let PriceValue=Price.value
    let SubTotal=getSubTotalPrice(QtyValue,PriceValue)
    let TaxAmount=getTax(SubTotal,SelectedTaxState)
    let Discount=getDiscount(SubTotal)
    let TotalPrice=getTotalPrice(SubTotal,TaxAmount,Discount)

    ansDiv.innerHTML=("<p>"+
    "Nombre: "+ProductsName.value+
    "<br>Cantidad: "+QtyValue+
    "<br>Precio: "+PriceValue+
    "<br>Monto: "+SubTotal+
    "<br>Tax "+StateCode.value+": "+TaxAmount+
    "<br>Descuento: "+Discount+
    "<br>Monto Total "+TotalPrice+
    "</p>")
    addTransactiontoList(ProductsName.value,QtyValue,PriceValue,SubTotal,TaxAmount,Discount,TotalPrice)
}

export default processNewTransactionTransaction