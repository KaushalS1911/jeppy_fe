import React from 'react';
import Products from "../components/ourProducts/products.jsx";
import Experts from "../components/ourProducts/experts.jsx";
import bgimage from "../assets/images/global/header/831c2714b328fccede3d32794e839d583281f838.jpg";
import Header from "../components/global/header.jsx";

const OurProducts = () => {
    return (
        <>
            <Header heading={'Snacks That Shape the Future'}
                    subtext={'From 2D to 3D, from cereals to multigrain — explore our wide variety of ready-to-fry and air-roast snack papads.'}
                    buttonText={'View all Categories'}
                    img={bgimage}
                    bgcolor={'rgba(254, 195, 85, 0.4)'}
            />
            <Products />
            <Experts />
        </>
    );
};

export default OurProducts;
