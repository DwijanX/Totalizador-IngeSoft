function getSubTotalPrice(Qty,Price)
{
    return Qty*Price
}
function getTotalPrice(SubTotal,TaxAmount)
{
    return SubTotal+TaxAmount
}
export { getSubTotalPrice,getTotalPrice}