import { getTaxesObj } from "./taxManager";

let StateCode = document.querySelector("#StateCode");
function loadStates() {
    let stateCodeComboHTML=""
    let TaxesObjKeys=Object.keys(getTaxesObj())
    for(let i=0;i<TaxesObjKeys.length;i++)
    {
        stateCodeComboHTML+="<option value ="+TaxesObjKeys[i]+">"+TaxesObjKeys[i]+"</option>"
    }
    StateCode.innerHTML=stateCodeComboHTML
  }
export  {loadStates};