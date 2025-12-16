import React from "react";
import CompanyHero from "../components/aboutUs/companyHero.jsx";
import CompanyStats from "../components/aboutUs/companyStats.jsx";
import CompanyVisionMission from "../components/aboutUs/companyVisionMission.jsx";
import CompanyWhoWeAre from "../components/aboutUs/companyWhoWeAre.jsx";
import CompanyCertifications from "../components/aboutUs/companyCertifications.jsx";
import CompanyCTA from "../components/aboutUs/companyCTA.jsx";
import ShapeFuture from "../components/ourProducts/shapeFuture.jsx";

function About() {
  return (
    <>
      <CompanyHero />
      <CompanyStats />
      <CompanyVisionMission />
      <CompanyWhoWeAre />
      <CompanyCertifications />
      <ShapeFuture />
    </>
  );
}

export default About;
