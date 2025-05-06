import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import aboutComponent61 from "../../assets/images/home/About/Iso-and-fssi-certificates-900x900x65x65-02 1.png"
import aboutComponent62 from "../../assets/images/home/About/Iso-and-fssi-certificates-900x900x65x65-04 1.png"
import aboutComponent63 from "../../assets/images/home/About/Iso-and-fssi-certificates-900x900x65x65-06 1.png"

function OurCertificates() {
    return (
        <>
            <Box sx={{padding: "50px 0"}}>
                <Container maxWidth={"xl"}>
                    <Box>
                        <Typography sx={{fontWeight: "700", fontSize: "36px", textAlign: "center", lineHeight: "65px"}}>Our
                            Certificates</Typography>
                    </Box>
                    <Box sx={{display: "flex",gap:{lg:"40px",xs:"40px"},width:"70%",margin:"auto",padding:"20px", justifyContent: "space-between", alignItems: "center"}}>
                        <Box>
                            <img src={aboutComponent63} style={{height:"auto",width:"100%"}} alt=""/>
                        </Box>
                        <Box>
                            <img src={aboutComponent62} style={{height:"auto",width:"100%"}} alt=""/>
                        </Box>
                        <Box>
                            <img src={aboutComponent61} style={{height:"auto",width:"100%"}} alt=""/>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default OurCertificates;