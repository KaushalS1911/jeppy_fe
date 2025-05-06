import React from 'react';
import {Box, Container} from "@mui/material";
import Img1 from "../../assets/images/home/our Company/7b7ab9dcec7f396d5afb549ee14437deb4d7e466.jpg";
import Img2 from "../../assets/images/home/our Company/b1f621b7f07c140cc09e7407cebcd81863369f90.jpg";

function OurCompany() {
    return (
        <Box>
<Container maxWidth="xl">
    <Box sx={{
        display:"flex",
        justifyContent: "center",
        textAlign:'center',
        fontSize:'36px',
        fontWeight:700,
        mb:10
    }}>
        Our Sister’s Company
    </Box>
    <Box sx={{
        display: "flex",
        justifyContent: 'center'
    }}>
        <Box sx={{
            display:"flex",
            justifyContent: 'start',
        }}>
            <Box
                component="img"
                src={Img1}
                alt="img1"
                sx={{
                    width: "60%",
                    height: "auto",
                    objectFit: "contain"
                }}
            />
        </Box>
        <Box>
            <Box
                component="img"
                src={Img2}
                alt="img2"
                sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain"
                }}
            />
        </Box>
    </Box>
</Container>
        </Box>
    );
}

export default OurCompany;