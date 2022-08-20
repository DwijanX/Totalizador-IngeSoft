import { getSubTotalPrice,getTotalPrice} from "./TotalPriceCalculator";
import {getTax} from "./taxManager";
import getDiscount from "./discountManager";

const Qty = document.querySelector("#QtyProduct");
const Price = document.querySelector("#ProductsPrice");
const ansDiv=document.querySelector("#AnswerDiv")
const StateCodeCombo = document.querySelector("#StateCode");
const ProductsName=document.querySelector("#ProductsName")
const TransactionList=document.querySelector("#TransactionList")
const ProductsID=document.querySelector("#ProductsID")



function addTransactiontoList(Transaction)
{
    title="Nombre: "+Transaction["Nombre"]
    description="-"
    Object.keys(Transaction).forEach((key)=>
    {
        if (key!="Nombre")
            description+=key+": "+Transaction[key]+" "
    })
    TransactionList.innerHTML+="<dt>"+title+"</dt> <dd>"+description+"</dd>"
}
function processNewTransaction()
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
    "<br>ID: "+ProductsID.value+
    "<br>Cantidad: "+QtyValue+
    "<br>Precio: "+PriceValue+
    "<br>Monto: "+SubTotal+
    "<br>Tax "+StateCode.value+": "+TaxAmount+
    "<br>Descuento: "+Discount+
    "<br>Monto Total "+TotalPrice+
    "</p>")
    Transaction={Nombre:ProductsName.value,ID:ProductsID.value,Cantidad:QtyValue,
        Precio:PriceValue,Monto:SubTotal,Tax:TaxAmount,Descuento:Discount,MontoTotal:TotalPrice}
    addTransactiontoList(Transaction)
}

export default processNewTransaction