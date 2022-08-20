import {loadStates} from "./TaxesValuesLoader";
import processNewTransaction from "./TransactionsManager";
import validateIfValuesIsNumber from "./valuesValidator";

const Qty = document.querySelector("#QtyProduct");
const Price = document.querySelector("#ProductsPrice");
const form = document.querySelector("#TotalizatorForm");
const ansDiv=document.querySelector("#AnswerDiv")
const ClearButton=document.querySelector("#ClearButton")
const ClearTransactionsButton=document.querySelector("#ClearTransactionsButton")
const TransactionList=document.querySelector("#TransactionList")
const ProductsID=document.querySelector("#ProductsID")
const ProductsName=document.querySelector("#ProductsName")

document.onload=loadStates()

ClearButton.addEventListener("click",()=>
{
    ansDiv.innerHTML=""
    Qty.value=""
    ProductsID.value=""
    ProductsName.value=""
    Price.value=""
})
ClearTransactionsButton.addEventListener("click",()=>
{
    TransactionList.innerHTML=""
})
Qty.addEventListener("input",()=>validateIfValuesIsNumber(Qty.value))
Price.addEventListener("input",()=>validateIfValuesIsNumber(Price.value))


form.addEventListener("submit",(event)=>
{
    event.preventDefault()
    processNewTransaction()
});
