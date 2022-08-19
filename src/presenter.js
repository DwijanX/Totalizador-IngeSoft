
const Qty = document.querySelector("#QtyProduct");
const form = document.querySelector("#TotalizatorForm");
const ansDiv=document.querySelector("#AnswerDiv")
form.addEventListener("submit",(event)=>
{
    event.preventDefault()
    ansDiv.innerHTML="<p>"+Qty.value+"</p>"
});
