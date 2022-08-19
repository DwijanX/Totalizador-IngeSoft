function getSubTotalPrice(Qty,Price)
{
    return Qty*Price
}
function getTotalPrice(SubTotal,TaxAmount,Discount=0)
{
    return SubTotal+TaxAmount-Discount
}
export { getSubTotalPrice,getTotalPrice}