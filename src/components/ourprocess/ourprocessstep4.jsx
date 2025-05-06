import React from 'react';
import {Box, Typography, Grid, Container} from '@mui/material';
import imgstep4 from "../../assets/images/ourprocess/ManufacturingProcessSteps/QualityControl.png";
import image1 from "../../assets/images/ourprocess/ManufacturingProcessSteps/createdby1.png";
import image2 from "../../assets/images/ourprocess/ManufacturingProcessSteps/createdby2.png";
import image3 from "../../assets/images/ourprocess/ManufacturingProcessSteps/createdby3.png";

function Ourprocessstep4() {
    const data = {
        step: "STEP 4",
        title: "Quality Control",
        description: [
            "Multiple checks are conducted at each production stage.",
            "Latest instruments are used to ensure snacks meet quality benchmarks."
        ],
        certifiedBy: [
            {image: image1,},
            {image: image2,},
            {image: image3,},
        ],
        image: imgstep4,
    };

    return (
        <Box>
            <Box sx={{py: 8, margin: {sm: '0 30px', lg: "0 auto", xs: "0 10px"}}}>
                <Grid container spacing={4}>
                    <Grid item size={{xs: 12, lg: 6}}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            height: "100%",
                            pl: {xs: 2, sm: 4, md: 6, lg: 6},
                            py: {xs: 1, sm: 2, md: 3, lg: 4},
                        }}>
                            <Typography variant="h5" sx={{
                                fontSize: {xl: "24px", sm: "20px", xs: "16px"},
                                color: "rgba(242, 138, 30, 1)",
                                fontWeight: 300,
                                mb: 1,
                            }}>
                                {data.step}
                            </Typography>

                            <Typography variant="h4" sx={{
                                fontWeight: 700,
                                fontSize: {xl: "48px", sm: "36px", xs: "28px"},
                                mb: 2,
                            }}>
                                {data.title}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item size={{lg: 6, xs: 12}}>
                        <Box sx={{
                            pl: {xs: 2, sm: 4, md: 6, lg: 6},
                            py: {xs: 1, sm: 2, md: 3, lg: 4},
                        }}>
                            {data.description.map((line, idx) => (
                                <Typography key={idx} sx={{
                                    fontSize: {xl: "24px", sm: "18px", xs: "16px"},
                                    fontWeight: 500,
                                    mb: 1,
                                }}>
                                    {line}
                                </Typography>
                            ))}

                            <Typography sx={{my: 3, fontWeight: 700, fontSize: {xl: "24px", sm: "18px", xs: "16px"},}}>
                                Certified by:
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                gap: 2,
                                mt: 1,
                                flexWrap: 'wrap',
                                alignItems: 'center',

                            }}>
                                {data.certifiedBy.map((cert, idx) => (
                                    <Box key={idx} sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                            src={cert.image}
                                            alt={cert.label}
                                            style={{width: 65, height: 65, objectFit: 'contain'}}
                                        />

                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{height: {md:"600px" , xs:"100%"} , width: "100%"}}>
                <img src={imgstep4} alt="imgstep4" style={{ width: '100%' , height: '100%' , objectFit: 'cover' }} />
            </Box>
        </Box>
    );
}

export default Ourprocessstep4;
