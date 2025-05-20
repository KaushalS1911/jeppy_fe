import React, {useState} from 'react';
import {Box, useTheme} from "@mui/material";
import 'aos/dist/aos.css';
import Img1 from '../../assets/images/ourprocess/ManufacturingProcessSteps/Team (1).png'

function FleppyCrew() {
    const theme = useTheme();

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

    return (
        <Box sx={{py: 10}}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <Box
                    sx={{...shineEffectStyles}}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Box
                        component="img"
                        src={Img1}
                        alt="Snacks assortment"
                        sx={{
                            width: '100%',
                            maxWidth: '972px',
                            maxHeight: '648px',
                            height: 'auto',
                            objectFit: 'cover',
                            transition: "transform 1s ease",
                            transform: isHovered ? "scale(1.05)" : "scale(1)",
                            // borderRadius: 2
                        }}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    py: 5,
                    fontSize: {lg: '64px', md: '40px', xs: '28px'},
                    color: `${theme.palette.saffron}`,
                    fontWeight: '700',
                }}
                data-aos="fade-up"
                data-aos-delay="300"
            >
                The Fleppy crew is the heart of <br/>
                our promise to you.
            </Box>
        </Box>
    );
}

export default FleppyCrew;