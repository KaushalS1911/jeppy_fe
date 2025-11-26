import React from 'react'
import Suitability from "../components/productDetails/Suitability.jsx";
import ProductSlider from "../components/productDetails/productSlider.jsx";
import SingleProduct from "../components/productDetails/singleProduct.jsx";
import ShapeFuture from "../components/ourProducts/shapeFuture.jsx";

const ProductDetails = () => {
    return (
        <>
            <SingleProduct/>
            <Suitability/>
            <ProductSlider/>
            <ShapeFuture/>
        </>
    )
}
export default ProductDetails
