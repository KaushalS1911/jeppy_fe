import React from 'react'
import ProductRatingSection from "../components/productDetails/ProductRatingSection.jsx";
import Suitability from "../components/productDetails/Suitability.jsx";
import ProductSlider from "../components/productDetails/productSlider.jsx";
import SingleProduct from "../components/productDetails/singleProduct.jsx";

const ProductDetails = () => {
    return (
        <>
            <SingleProduct/>
            <Suitability/>
            <ProductSlider/>
            <ProductRatingSection/>
        </>
    )
}
export default ProductDetails
