import React from 'react';
import {Box, Container} from "@mui/material";

function GlobelAbout() {
    return (
        <>
            <Box sx={{py: "50px"}}>
                <Container maxWidth={"xl"}>
                    <Box sx={{padding: "50px 0"}}>
                        <Box sx={{
                            backgroundColor: "white",
                            fontSize: {lg:"36px" ,xs:"30px"},
                            fontWeight: "700",
                            borderRadius: "15px",
                            textAlign: "center",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                            padding: "40px"
                        }}>“ To Be the Global Leader in Snack Papad Industry ”</Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default GlobelAbout;