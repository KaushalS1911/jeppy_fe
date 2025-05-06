import React, { useLayoutEffect, useRef} from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mainImage from '../../assets/images/home/heroSection/0b644f6836da58b9315ff1f2cf1a46e43de00d6f.png';
import veggieSnacks from '../../assets/images/home/heroSection/92db2a4174caa0e84b5a586944ec8a587dcc2627.png';
import potatoSnacks from '../../assets/images/home/heroSection/1c64d0bd438fefc8d877ff870b73f607967e3f4a.png';
import cerealBased from '../../assets/images/home/heroSection/0a082ddeaee5d26b3d24afd90a0a9c65051d5224.png';
import glutenFree from '../../assets/images/home/heroSection/373bff250ce1a39db4ad5fab1df63cdd6de999d5.png';

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const sectionRef = useRef(null);
    const orangeBgRef = useRef(null);
    const mainImageRef = useRef(null);
    const mainImageLabelRef = useRef(null); // New reference for the "Cereal Based" label

    const productRefs = {
        veggie: useRef(null),
        potato: useRef(null),
        cereal: useRef(null),
        glutenFree: useRef(null)
    };
    const labelRefs = {
        veggie: useRef(null),
        potato: useRef(null),
        cereal: useRef(null),
        glutenFree: useRef(null)
    };


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const contentSectionRef = document.querySelector('[data-content-section]');
            const imageSectionRef = document.querySelector('[data-image-section]');

            const calculateResponsiveValues = () => {
                const initialScale = isMobile ? 0.05 : isTablet ? 0.08 : 0.1;
                const positions = isMobile ? {
                    veggie: { x: -100, y: -150 },
                    potato: { x: -100, y: 150 },
                    cereal: { x: 100, y: -150 },
                    glutenFree: { x: 100, y: 150 }
                } : isTablet ? {
                    veggie: { x: -130, y: -100 },
                    potato: { x: -130, y: 110 },
                    cereal: { x: 130, y: -110 },
                    glutenFree: { x: 130, y: 110 }
                } : isLargeScreen ? {
                    veggie: { x: -250, y: -250 },
                    potato: { x: -250, y: 170 },
                    cereal: { x: 220, y: -250 },
                    glutenFree: { x: 220, y: 170 }
                } : {
                    veggie: { x: -180, y: -150 },
                    potato: { x: -180, y: 150 },
                    cereal: { x: 180, y: -150 },
                    glutenFree: { x: 180, y: 150 }
                };
                return { initialScale, positions };
            };

            const { initialScale, positions } = calculateResponsiveValues();

            gsap.set(Object.values(productRefs).map(ref => ref.current), {
                scale: initialScale,
                opacity: 0,
                transformOrigin: "center center"
            });

            gsap.set(Object.values(labelRefs).map(ref => ref.current), {
                opacity: 0,
                y: -20
            });

            gsap.set(mainImageLabelRef.current, {
                opacity: 0,
                y: -20,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: isMobile ? "+=600" : isTablet ? "+=800" : "+=1000",
                    scrub: isMobile ? 0.5 : 0.8,
                    pin: true,
                    anticipatePin: 1,
                    markers: false
                }
            });

            tl.to(orangeBgRef.current, {
                [isMobile ? 'height' : 'width']: "100%",
                duration: 2,
                ease: "power1.inOut"
            }, 0);

            if (contentSectionRef) {
                tl.to(contentSectionRef, {
                    x: "-100%",
                    opacity: 0,
                    duration: 2,
                    ease: "power2.inOut"
                }, 0);
            }

            if (imageSectionRef) {
                tl.to(imageSectionRef, {
                    x: isMobile ? "0" : "-10%",
                    width: "100%",
                    duration: 2,
                    ease: "power2.inOut"
                }, 0);
            }

            tl.to(mainImageRef.current, {
                scale: isMobile ? 1.1 : isTablet ? 1.15 : 1.2,
                x: 0,
                duration: 2,
                ease: "power1.inOut"
            }, 0);

            tl.to(mainImageLabelRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "back.out(1.7)"
            }, 1);

            Object.keys(productRefs).forEach((product, index) => {
                const imgRef = productRefs[product].current;
                const labelRef = labelRefs[product].current;
                const pos = positions[product];
                const yOffset = 10;

                tl.to(imgRef, {
                    scale: isMobile ? 0.8 : isTablet ? 0.9 : 1,
                    opacity: 1,
                    x: pos.x,
                    y: pos.y,
                    duration: 1.5,
                    ease: "back.out(1.7)"
                }, 1 + index * 0.1);

                tl.to(labelRef, {
                    opacity: 1,
                    x: pos.x,
                    y: pos.y - yOffset,
                    duration: 1.5,
                    ease: "back.out(1.7)"
                }, 1 + index * 0.1 + 0.1);
            });

            const handleResize = () => ScrollTrigger.refresh(true);
            window.addEventListener('resize', handleResize);

            // Clean up scroll triggers on unmount
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, sectionRef); // sectionRef is the root of this context

        return () => ctx.revert(); // ✅ kills all animations and scrollTriggers created in context
    }, [isMobile, isTablet, isLargeScreen]);

    return (
        <Box ref={sectionRef} sx={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
            <Box sx={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                background: {
                    xs: `linear-gradient(to bottom, ${theme.palette.yellow || '#FFDE59'} 60%, ${theme.palette.saffron || '#F68B1F'} 40%)`,
                    sm: `linear-gradient(to right, ${theme.palette.yellow || '#FFDE59'} 60%, ${theme.palette.saffron || '#F68B1F'} 40%)`,
                },
                zIndex: 0
            }}>
                <Box ref={orangeBgRef} sx={{
                    position: 'absolute',
                    bottom: isMobile ? 0 : 'auto',
                    right: isMobile ? 'auto' : 0,
                    width: isMobile ? '100%' : '0%',
                    height: isMobile ? '0%' : '100%',
                    backgroundColor: theme.palette.saffron || '#F68B1F',
                    zIndex: 1
                }} />
            </Box>

            <Box data-content-section sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'flex-start', sm: 'center' },
                position: 'absolute',
                top: { xs: '5%', sm: 0 },
                left: 0,
                width: { xs: '100%', sm: '50%', lg: '45%' },
                height: { xs: 'auto', sm: '100%' },
                padding: {
                    xs: '16px',
                    sm: '0 32px',
                    md: '0 48px',
                    lg: '0 64px'
                },
                zIndex: 5,
                pb: { xs: 4, sm: 0 }
            }}>
                <Typography variant="h1" sx={{
                    fontWeight: 800,
                    fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "64px" },
                    color: "#172600",
                    textAlign: { xs: "center", sm: "left" },
                    mt: { xs: 4, sm: 0 },
                    letterSpacing: { xs: "-0.5px", md: "-1px" }
                }}>
                    Crave the Crunch.
                </Typography>
                <Typography variant="body1" sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "24px" },
                    color: "#000",
                    lineHeight: { xs: 1.5, md: 1.6 },
                    py: { xs: 2, sm: 3, md: 4 },
                    textAlign: { xs: "center", sm: "left" },
                    maxWidth: { lg: "90%" }
                }}>
                    From desk to travel, always ready to crunch.
                </Typography>
                <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" }, mb: { xs: 4, sm: 0 } }}>
                    <Button variant="contained" sx={{
                        backgroundColor: theme.palette.headerButton || '#4CAF50',
                        color: '#fff',
                        p: { xs: "10px 20px", sm: "12px 24px", md: "16px 28px", lg: "22px 32px" },
                        fontWeight: 600,
                        fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "24px" },
                        textTransform: 'none',
                        borderRadius: '50px',
                        border: '2px solid transparent',
                        transition: "all 0.3s ease",
                        boxShadow: '0px 4px 8px rgba(0,0,0,0.15)',
                        '&:hover': {
                            backgroundColor: '#FFF',
                            color: theme.palette.headerButton || '#4CAF50',
                            border: `2px solid ${theme.palette.headerButton || '#4CAF50'}`,
                            transform: 'translateY(-2px)',
                            boxShadow: '0px 6px 12px rgba(0,0,0,0.2)'
                        },
                        '&:active': {
                            transform: 'translateY(1px)',
                            boxShadow: '0px 2px 4px rgba(0,0,0,0.15)'
                        }
                    }}>
                        Explore Snacks
                    </Button>
                </Box>
            </Box>

            <Box data-image-section sx={{
                position: 'absolute',
                top: { xs: '60%', sm: '62%' },
                left: { sm: '60%', xs: '50%' },
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: { xs: '45%', sm: '100%' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 5
            }}>
                <Typography ref={mainImageLabelRef} sx={{
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '16px', xl: '18px' },
                    mb: { xs: 0.5, sm: 1 },
                    whiteSpace: 'nowrap',
                    textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    position: 'absolute',
                    zIndex: 6,
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    Cereal Based
                </Typography>

                <Box ref={mainImageRef} component="img" src={mainImage} alt="Main Product" sx={{
                    width: { xs: '300px', sm: '230px', md: '270px', lg: '330px', xl: '600px' },
                    height: { xs: '300px', sm: '230px', md: '270px', lg: '330px', xl: '600px' },
                    objectFit: 'contain',
                    position: 'absolute',
                    zIndex: 5,
                    filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))'
                }} />
                <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    {[{ id: 'veggie', name: 'Veggie Snacks', img: veggieSnacks },
                        { id: 'potato', name: 'Potato Snacks', img: potatoSnacks },
                        { id: 'cereal', name: 'High Protein', img: cerealBased },
                        { id: 'glutenFree', name: 'Gluten Free', img: glutenFree }]
                        .map(product => (
                            <Box key={product.id} sx={{
                                position: 'absolute',
                                textAlign: 'center',
                                zIndex: 7,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}>
                                <Typography ref={labelRefs[product.id]} sx={{
                                    color: '#fff',
                                    fontWeight: 600,
                                    fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '22px' },
                                    zIndex: 10,
                                    opacity: 0,
                                    textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
                                    backgroundColor: 'rgba(0,0,0,0.2)',
                                    padding: '4px 8px',
                                    borderRadius: '12px',
                                }}>
                                    {product.name}
                                </Typography>
                                <Box ref={productRefs[product.id]} component="img" src={product.img} alt={product.name} sx={{
                                    width: { xs: '80px', sm: '100px', md: '150px', lg: '180px' },
                                    height: { xs: '80px', sm: '100px', md: '150px', lg: '180px' },
                                    objectFit: 'contain',
                                    marginTop: '15px',
                                    zIndex: 8,
                                    opacity: 0
                                }} />
                            </Box>
                        ))}
                </Box>
            </Box>
        </Box>
    );
}

export default HeroSection;
