import React from 'react';
import Products from "../components/home/products.jsx";
import Milestone from "../components/home/milestone.jsx";
import OurCompany from "../components/home/ourCompany.jsx";
import AboutUs from "../components/home/aboutUs.jsx";
import HeroSection from "../components/home/heroSection.jsx";
import OurSolution from "../components/home/ourSolution.jsx";
import OurPartners from "../components/home/ourPartners.jsx";
import Certification from "../components/home/certification.jsx";
function Home() {
    return (
        <>
            <HeroSection />
            <OurCompany/>
            <Milestone/>
            <Products/>
{/*<AboutUs/>*/}
            {/*<OurSolution />*/}
            <OurPartners />
            <Certification/>

        </>
    );
}

export default Home;