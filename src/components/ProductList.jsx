import { useEffect, useState } from "react";

function ProductList({product, addToCart}){

    const handleAddToCart = () =>{
        addToCart(product); 
    }

    const loaded = () =>{
        //As cart state need to be maintained in parent component
        //addToCart functionality added in Product page and passed
        //prop addToCart to ProductList
        //Then useState cart will be passed to cart component
   
        return(
            <div className="flex justify-center items-center">
                    <div className="max-w-sm w-64 h-auto bg-white-100 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center w-full overflow-hidden">
                        <img className="rounded-t-lg w-64 h-80 hover-image"  src={product.image} alt="product" 
                       />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="font-normal text-gray-700 dark:text-gray-400 text-center">
                            <h3 className="title">
                                {product.prodname}
                            </h3>
                            <h3 className="title">
                                {`Size - ${product.size}`}
                            </h3>
                            <h3 className="title mt-3">
                            {
                            product.price && product.price["$numberDecimal"]
                        ? `$${product.price["$numberDecimal"]}`
                        : ""}
                            </h3>
                        </div>
                    </div>
                    <div className="mt-4 mb-4">
                        <button type="button" className="bg-black text-white p-2 rounded-md w-32 h-8 flex items-center justify-center cursor-pointer text-xs" onClick={handleAddToCart}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        )
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return product ? loaded() : loading();
}

export default ProductList;