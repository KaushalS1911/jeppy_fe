import React from 'react';
import {Box} from "@mui/material";
import Header from "../components/global/header.jsx";
import Snackingvision from "../components/ourprocess/snackingvision.jsx";
import Ourprocessstep1 from "../components/ourprocess/ourprocessstep1.jsx";
import Ourprocessstep2 from "../components/ourprocess/ourprocessstep2.jsx";
import Ourprocessstep3 from "../components/ourprocess/ourprocessstep3.jsx";
import Ourprocessstep4 from "../components/ourprocess/ourprocessstep4.jsx";
import Ourprocessstep5 from "../components/ourprocess/ourprocessstep5.jsx";
import FleppyCrew from "../components/ourprocess/fleppycrew.jsx";
import LetsConnect from "../components/ourprocess/letsconnect.jsx";
import bgimage from "../assets/images/global/header/header.jpg";

function Ourprocess() {
    return (
        <>
            <Header buttonText={"Let's Connect"}
                    subtext={'From sourcing to final packaging, Fleppy’s process is designed to deliver consistent, high-quality snacks you can trust.'}
                    heading={'From Idea to Crunch, We Do It Right.'}
                    img={bgimage}
                    bgcolor={'rgba(254, 195, 85, 0.7)'}
                    path={'/contact'}
            />
            <Snackingvision/>
            <Ourprocessstep1/>
            <Ourprocessstep2/>
            <Ourprocessstep3/>
            <Ourprocessstep4/>
            <Ourprocessstep5/>
            <FleppyCrew/>
            {/*<LetsConnect/>*/}
        </>
    );
}

export default Ourprocess;