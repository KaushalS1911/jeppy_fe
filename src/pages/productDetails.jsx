import React from 'react'
import MadStickSection from "../components/productDetails/singleProduct.jsx";
import ProductRatingSection from "../components/productDetails/ProductRatingSection.jsx";
import Suitability from "../components/productDetails/Suitability.jsx";
import ProductSlider from "../components/productDetails/productSlider.jsx";

const ProductDetails = () => {
    return (
        <>
            <MadStickSection/>
            <Suitability/>
            <ProductSlider/>
            <ProductRatingSection/>
        </>
    )
}
export default ProductDetails
