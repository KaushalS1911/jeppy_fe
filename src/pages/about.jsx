import React from 'react';
import OurVision from "../components/aboutUs/ourVision.jsx";
import Whoweare from "../components/aboutUs/WhoWeAre.jsx";
import GlobelAbout from "../components/aboutUs/GlobelAbout.jsx";
import SliderAbout from "../components/aboutUs/SliderAbout.jsx";
import OurCertificates from "../components/aboutUs/OurCertificates.jsx";
import AboutHeader from "../components/aboutUs/aboutHeader.jsx";

function About() {
    return (
        <>
            <AboutHeader />
            <OurVision />
            <Whoweare />
            <GlobelAbout />
            <SliderAbout />
            <OurCertificates />
        </>
    );
}

export default About;