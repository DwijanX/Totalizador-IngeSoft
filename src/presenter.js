import {loadStates} from "./TaxesValuesLoader";
import processNewTransactionTransaction from "./TransactionsManager";
import validateIfValuesIsNumber from "./ValuesValidator";

const Qty = document.querySelector("#QtyProduct");
const Price = document.querySelector("#ProductsPrice");
const form = document.querySelector("#TotalizatorForm");
const ansDiv=document.querySelector("#AnswerDiv")
const ClearButton=document.querySelector("#ClearButton")
document.onload=loadStates()

ClearButton.addEventListener("click",()=>
{
    ansDiv.innerHTML=""
    Qty.value=""
    Price.value=""
})
Qty.addEventListener("input",()=>validateIfValuesIsNumber(Qty.value))
Price.addEventListener("input",()=>validateIfValuesIsNumber(Price.value))


form.addEventListener("submit",(event)=>
{
    event.preventDefault()
    processNewTransactionTransaction()
    
});
