import React from 'react';
import {Box, useTheme} from "@mui/material";
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
import Experts from "../components/ourProducts/experts.jsx";

function Ourprocess() {
    const theme = useTheme();
    return (
        <>
            <Header buttonText={"Let's Connect"}
                    subtext={'A reliable process line is the backbone of success in the snack pellet industry. Explore how our solutions cover every stage of production.'}
                    heading={'From Idea to Crunch, We Do It Right.'}
                    img={bgimage}
                    bgcolor={`${theme.palette.saffron}80`}
                    path={'/contact'}
            />
            <Snackingvision/>
            <Ourprocessstep1/>
            <Ourprocessstep2/>
            <Ourprocessstep3/>
            <Ourprocessstep4/>
            <Ourprocessstep5/>
            <Experts />
            {/* <Experts  containerProps={{ maxWidth: "xxl",sx: { px: { xs: 2, sm: 4, md: 6 } }}}/> */}
            {/*<FleppyCrew/>*/}
            {/*<LetsConnect/>*/}
        </>
    );
}

export default Ourprocess;