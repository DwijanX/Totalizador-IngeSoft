const USATaxes={TX:0.0625,UT:0.0665,NV:0.08,AL:0.04,CA:0.0825}

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