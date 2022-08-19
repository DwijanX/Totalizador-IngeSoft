const Discounts={1000:0.03}

function getDiscount(price)
{
    let discountApplied=0
    DiscountRanges=Object.keys(Discounts)
    for (let i=DiscountRanges.length;i>=0;i--)
    {
        if(DiscountRanges[i]<=price)
        {
            discountApplied=price*Discounts[DiscountRanges[i]]
        }
    }
    return discountApplied
}
export default getDiscount