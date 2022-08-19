const AlertDiv=document.querySelector("#AlertDiv")
function validateIfValuesIsNumber(value)
{
    if(isNaN(value))
    {
        AlertDiv.innerHTML='<p>Ingrese valores numericos</p>'
    }
    else
    {
        AlertDiv.innerHTML=""
    }
}

export default validateIfValuesIsNumber