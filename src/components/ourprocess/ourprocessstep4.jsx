import React, {useState} from 'react';
import {Box, Typography, Grid} from '@mui/material';
import imgstep4 from "../../assets/images/ourprocess/ManufacturingProcessSteps/QualityControl.png";
import certificate1 from '../../assets/images/global/certificates/aped.PNG';
import certificate2 from '../../assets/images/global/certificates/fssai-certi.PNG';
import certificate3 from '../../assets/images/global/certificates/halal.PNG';
import certificate4 from '../../assets/images/global/certificates/isoqar.PNG';
import 'aos/dist/aos.css';

function Ourprocessstep4() {

    const [isHovered, setIsHovered] = useState(false);

    const shineEffectStyles = {
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-75%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%)',
            transform: 'skewX(-25deg)',
            transition: 'all 0.75s',
            zIndex: 1,
        },
        '&:hover::before': {
            left: '125%',
        }
    };

    const data = {
        step: "STEP 4",
        title: "Quality Control",
        description: [
            "Real-time checks at every stage",
            "Advanced lab testing for consistency and safety"
        ],
        certifiedBy: [
            {image: certificate1},
            {image: certificate2},
            {image: certificate3},
            {image: certificate4},
        ],
        image: imgstep4,
    };

    return (
        <Box data-aos="fade-up">
            <Box sx={{py: 8, margin: {sm: '0 30px', lg: "0 auto", xs: "0 10px"}}}>
                <Grid container spacing={4}>
                    <Grid
                        item
                        size={{xs: 12, lg: 6}}
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            height: "100%",
                            pl: {xs: 2, sm: 4, md: 6, lg: 6},
                            py: {xs: 1, sm: 2, md: 3, lg: 4},
                        }}>
                            <Typography
                                data-aos="fade-up"
                                data-aos-delay="200"
                                variant="h5"
                                sx={{
                                    fontSize: {xl: "24px", sm: "20px", xs: "16px"},
                                    color: "rgba(242, 138, 30, 1)",
                                    fontWeight: 300,
                                    mb: 1,
                                }}
                            >
                                {data.step}
                            </Typography>

                            <Typography
                                data-aos="fade-up"
                                data-aos-delay="300"
                                variant="h4"
                                className={'monserrat'}
                                sx={{
                                    fontWeight: 700,
                                    fontSize: {xl: "44px", sm: "34px", xs: "30px"},
                                    my: 2,
                                }}
                            >
                                {data.title}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        size={{lg: 6, xs: 12}}
                        data-aos="fade-left"
                        data-aos-duration="1200"
                    >
                        <Box sx={{
                            pl: {xs: 2, sm: 4, md: 6, lg: 6},
                            py: {xs: 1, sm: 2, md: 3, lg: 4},
                        }}>
                            {data.description.map((line, idx) => (
                                <Typography
                                    key={idx}
                                    data-aos="fade-up"
                                    data-aos-delay={400 + (idx * 100)}
                                    sx={{
                                        fontSize: {xl: "20px", sm: "18px", xs: "16px"},
                                        fontWeight: 500,
                                        mb: 1,
                                    }}
                                >
                                    {line}
                                </Typography>
                            ))}

                            <Typography
                                data-aos="fade-up"
                                data-aos-delay="600"
                                sx={{my: 3, fontWeight: 700, fontSize: {xl: "22px", sm: "18px", xs: "16px"}}}
                            >
                                Certified by:
                            </Typography>

                            <Box
                                data-aos="fade-up"
                                data-aos-delay="700"
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    mt: 1,
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                }}
                            >
                                {data.certifiedBy.map((cert, idx) => (
                                    <Box
                                        key={idx}
                                        data-aos="zoom-in"
                                        data-aos-delay={700 + (idx * 100)}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Box sx={{
                                            transition: ".3s",
                                            '&:hover': {
                                                transform: "scale(1.1) !important",
                                            }
                                        }}>
                                            <img
                                                src={cert.image}
                                                alt={`Certificate ${idx + 1}`}
                                                style={{
                                                    width: 65,
                                                    height: 65,
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box
                data-aos="fade-up"
                data-aos-duration="1500"
                sx={{height: {md: "600px", xs: "100%"}, width: "100%", ...shineEffectStyles}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={imgstep4} alt="Quality Control Process"
                     style={{
                         width: '100%',
                         height: '100%',
                         objectFit: 'cover',
                         transition: "transform 0.5s ease",
                         transform: isHovered ? "scale(1.05)" : "scale(1)",
                     }}/>
            </Box>
        </Box>
    );
}

export default Ourprocessstep4;