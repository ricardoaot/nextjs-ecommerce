const productID = ( 
    {
        params: {productID}
    }: 
    { params : {productID: String}}
) => {
    
    return (
        <>
            <div>productID: {productID}</div>

        </>
    )
}

export default productID