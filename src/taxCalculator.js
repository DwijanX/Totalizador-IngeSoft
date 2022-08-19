const USATaxes={TX:0.0625}

function getTax(Price,State)
{
    let ans=0;
    if (State in USATaxes)
    {
        ans=Price*USATaxes[State]
    }
    return ans
}
export default getTax