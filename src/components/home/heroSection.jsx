import React, {useRef, useEffect} from 'react';
import {Box, Typography, useTheme} from "@mui/material";
import {keyframes} from '@emotion/react';

import logo from '../../assets/images/global/Jeppy Logo - Copy (3).png';
import pellets1 from '../../assets/images/home/heroSection/png/2D VEGGIE STRAW.png';
import pellets2 from '../../assets/images/home/heroSection/png/2D PENNE.png';
import pellets3 from '../../assets/images/home/heroSection/png/2D_0638.png';
import pellets4 from '../../assets/images/home/heroSection/png/3D_0679.png';
import pellets5 from '../../assets/images/home/heroSection/png/2D_0579.png';
import pellets6 from '../../assets/images/home/heroSection/png/2D BEACON.png';
import pellets7 from '../../assets/images/home/heroSection/png/2D_0586.png';
import pellets8 from '../../assets/images/home/heroSection/png/3D_0676.png';
import pellets9 from '../../assets/images/home/heroSection/png/3D_0652.png';
import peas from '../../assets/images/home/heroSection/ST139-removebg-preview.png';
import beans from '../../assets/images/home/heroSection/red-beans-removebg-preview.png';
import soya
    from '../../assets/images/home/heroSection/spoon-dried-peas-isolated-on-260nw-2512111791-removebg-preview.png';
import wheat from '../../assets/images/home/heroSection/GE31WD0fGmAHlekH-removebg-preview.png';
import ceramide
    from '../../assets/images/home/heroSection/pngtree-golden-wheat-grain-png-image_6723532-removebg-preview.png';
import flower
    from '../../assets/images/home/heroSection/bowls-various-lentils-shape-flower-260nw-687235816-removebg-preview.png';

const float1 = keyframes`
    0% {
        transform: translate(-50%, -50%) translateY(0);
    }
    50% {
        transform: translate(-50%, -50%) translateY(-20px);
    }
    100% {
        transform: translate(-50%, -50%) translateY(0);
    }
`;

const float2 = keyframes`
    0% {
        transform: translate(-50%, -50%) translateY(0);
    }
    50% {
        transform: translate(-50%, -50%) translateY(20px);
    }
    100% {
        transform: translate(-50%, -50%) translateY(0);
    }
`;

function HeroSection() {
    const pelletsRef = useRef([]);
    const theme = useTheme();

    const pelletImages = [
        {src: pellets1, id: 'pellet-1'},
        {src: pellets2, id: 'pellet-2'},
        {src: pellets3, id: 'pellet-3'},
        {src: pellets4, id: 'pellet-4'},
        {src: pellets5, id: 'pellet-5'},
        {src: pellets6, id: 'pellet-6'},
        {src: pellets7, id: 'pellet-7'},
        {src: pellets8, id: 'pellet-8'},
        {src: pellets9, id: 'pellet-9'},
    ];

    const pelletsPositions = [
        {top: '35%', left: '25%', rotation: 45, scale: 1.2},
        {top: '50%', left: '80%', rotation: -30, scale: 1.3},
        {top: '70%', left: '20%', rotation: 15, scale: 1.1},
        {top: '30%', left: '75%', rotation: -45, scale: 1.4},
        {top: '50%', left: '15%', rotation: 20, scale: 1.3},
        {top: '70%', left: '60%', rotation: -15, scale: 1.2},
        {top: '40%', left: '40%', rotation: 30, scale: 1.1},
        {top: '75%', left: '40%', rotation: 30, scale: 1.1},
        {top: '35%', left: '60%', rotation: 30, scale: 1.1},
    ];

    useEffect(() => {
        pelletsRef.current.forEach((pellet, index) => {
            if (pellet) {
                const {top, left, rotation, scale} = pelletsPositions[index];
                pellet.style.top = top;
                pellet.style.left = left;
                pellet.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;
            }
        });
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.purple,
                py: 5,
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
            }}
        >
            {pelletImages.map((pellet, index) => (
                <Box
                    component="img"
                    key={pellet.id}
                    ref={el => pelletsRef.current[index] = el}
                    src={pellet.src}
                    alt={`Snack pellet ${index + 1}`}
                    sx={{
                        position: 'absolute',
                        width: {md: '150px', sm: '120px', xs: '80px'},
                        height: {md: '150px', sm: '120px', xs: '80px'},
                        objectFit: 'contain',
                        zIndex: 1,
                        top: '50%',
                        left: '50%',
                        animation: `${index % 2 === 0 ? float1 : float2} 6s ease-in-out infinite`
                    }}
                />
            ))}

            <Box sx={{zIndex: 2, mb: 4}}>
                <Box sx={{height: "100%", width: {xs:"200px" , sm:'250px'}}}>
                    <img src={logo} alt="Jeppy Logo" style={{height: "100%", width: "100%", objectFit: "contain"}}/>
                </Box>
            </Box>

            <Box sx={{position: "relative", zIndex: 2}}>
                <Typography className={'monserrat'} sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: {xs: '32px', sm: "38px", md: "54px"},
                    transform: "rotate(-5deg)",
                    letterSpacing: "2px",
                    pt: 2
                }}>World of</Typography>
                <Typography className={'monserrat'} sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 900,
                    fontSize: {xs: '80px', sm: "125px", md: "200px"},
                    transform: "rotate(-5deg)",
                    letterSpacing: "2px",
                    lineHeight:'200px'
                }}>Snack</Typography>
                <Typography className={'monserrat'} sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: {xs: '32px', sm: "38px", md: "54px"},
                    transform: "rotate(-5deg)",
                    letterSpacing: "2px",
                    pt: {md:8 , xs:3},
                }}>Pellets</Typography>
            </Box>

            <Box>
                <Box sx={{
                    position: 'absolute',
                    top: {md: '-10%', sm: '-5%', xs: '-1%'},
                    left: "-5%",
                    width: {lg: '300px', md: '230px', sm: '150px', xs: '80px'},
                    height: {lg: '300px', md: '230px', sm: '150px', xs: '80px'}
                }}>
                    <img src={peas} alt="peas" style={{width: "100%", height: "100%", objectFit: 'contain'}}/>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    top: {sm: '-12%', xs: '-3%'},
                    left: "25%",
                    width: {lg: '300px', md: '230px', sm: '150px', xs: '80px'},
                    height: {lg: '300px', md: '230px', sm: '150px', xs: '80px'}
                }}>
                    <img src={beans} alt="beans" style={{width: "100%", height: "100%", objectFit: 'contain'}}/>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    top: {sm: '-10%', xs: '-3%'},
                    right: "25%",
                    width: {lg: '300px', md: '230px', sm: '150px', xs: '80px'},
                    height: {lg: '300px', md: '230px', sm: '150px', xs: '80px'}
                }}>
                    <img src={soya} alt="soya" style={{width: "100%", height: "100%", objectFit: 'contain'}}/>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    top: {md: '-10%', sm: '-5%', xs: '-3%'},
                    right: "-5%",
                    width: {lg: '300px', md: '230px', sm: '150px', xs: '80px'},
                    height: {lg: '300px', md: '230px', sm: '150px', xs: '80px'}
                }}>
                    <img src={wheat} alt="wheat" style={{width: "100%", height: "100%", objectFit: 'contain'}}/>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    bottom: '-2%',
                    left: "-2%",
                    width: {lg: '300px', md: '230px', sm: '150px', xs: '120px'},
                    height: {lg: '300px', md: '230px', sm: '150px', xs: '120px'}
                }}>
                    <img src={ceramide} alt="ceramide" style={{width: "100%", height: "100%", objectFit: 'contain'}}/>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    bottom: {sm: '-12%', xs: '-8%'},
                    right: "-5%",
                    width: {lg: '400px', md: '330px', sm: '230px', xs: '150px'},
                    height: {lg: '400px', md: '330px', sm: '230px', xs: '150px'}
                }}>
                    <img src={flower} alt="flower" style={{width: "100%", height: "100%", objectFit: 'contain'}}/>
                </Box>
            </Box>
        </Box>
    );
}

export default HeroSection;
