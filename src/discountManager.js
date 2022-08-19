const Discounts={1000:0.03,3000:0.05,7000:0.07,10000:0.1,30000:0.15}

function getDiscount(price)
{
    let discountApplied=0
    DiscountRanges=Object.keys(Discounts)
    for (let i=DiscountRanges.length;i>=0;i--)
    {
        if(DiscountRanges[i]<=price)
        {
            discountApplied=price*Discounts[DiscountRanges[i]]
            break
        }
    }
    return discountApplied
}
export default getDiscount