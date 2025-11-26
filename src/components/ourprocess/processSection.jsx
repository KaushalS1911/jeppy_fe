import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, useTheme } from '@mui/material';
import imgstep1 from "../../assets/images/ourprocess/ManufacturingProcessSteps/RawMaterialProcurement.png";
import imgstep2 from "../../assets/images/ourprocess/ManufacturingProcessSteps/CoreProductionProcess.png";
import imgstep3 from "../../assets/images/ourprocess/ManufacturingProcessSteps/Hygiene&Automation.png";
import imgstep4 from "../../assets/images/ourprocess/ManufacturingProcessSteps/QualityControl.png";
import imgstep5 from "../../assets/images/ourprocess/ManufacturingProcessSteps/Packaging&Storage.png";
import 'aos/dist/aos.css';

function ProcessSection() {
    const theme = useTheme();

    const allSteps = [
        {
            steps: "STEP - 01",
            title: "Raw Material Sourcing.",
            points: [
                'Sourced from trusted suppliers (potato, lentil, soya, rice, etc).',
                'Tested for moisture, density, ash content, pH, color & viscosity.',
                'Only approved materials proceed to production.'
            ],
            image: imgstep1,
        },
        {
            steps: "STEP - 02",
            title: "Core Production.",
            points: [
                'Ingredients are precisely measured, sieved, mixed, and moisturized into dough.',
                'Dough is cooked, shaped (2D, 3D, or sheeted), cut, and dried.',
                'Ensures consistent texture, shape, and shelf-stable pellets.'
            ],
            image: imgstep2,
        },
        {
            steps: "STEP - 03",
            title: "Hygiene & Automation.",
            points: [
                'Fully automated, touch-free production.',
                'High hygiene compliance and food safety.',
                'Scalable output: up to 75,000 MT/year.'
            ],
            image: imgstep3,
        },
        {
            steps: "STEP - 04",
            title: "Quality Control.",
            points: [
                'Real-time checks at every stage.',
                'Advanced lab testing for consistency and safety.',
                'Certified by leading quality standards.'
            ],
            image: imgstep4,
        },
        {
            steps: "STEP - 05",
            title: "Packaging & Dispatch.",
            points: [
                'Final inspection before packing.',
                'Sealed in hygienic, market-ready formats.',
                'Stored & shipped for domestic and global delivery.'
            ],
            image: imgstep5,
        }
    ];

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.saffron,
                py: { xs: 6, sm: 8, md: 10 },
            }}
        >
            <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
                {/* Intro Text */}
                <Typography
                    data-aos="fade-up"
                    sx={{
                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        color: "white",
                        fontWeight: 400,
                        mb: 2,
                    }}
                >
                    Explore how our solutions cover every stage of production.
                </Typography>

                {/* Main Headline */}
                <Typography
                    className="monserrat"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: "32px", sm: "48px", md: "64px", lg: "72px" },
                        lineHeight: 1.2,
                        color: "white",
                        mb: { xs: 6, md: 8 },
                    }}
                >
                    From Idea to Crunch, We Do It Right.
                </Typography>

                {/* All Steps */}
                {allSteps.map((step, index) => (
                    <Box
                        key={index}
                        sx={{
                            mb: { xs: 6, md: 8 },
                            '&:last-child': {
                                mb: 0,
                            }
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', lg: index % 2 === 0 ? 'row' : 'row-reverse' },
                                alignItems: { xs: 'center', lg: 'flex-start' },
                                gap: { xs: 4, md: 6, lg: 8 },
                            }}
                        >
                            {/* Image Section */}
                            <Box
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={400 + (index * 100)}
                                sx={{
                                    flex: 1,
                                    width: '100%',
                                    maxWidth: { xs: '100%', md: '600px', lg: '700px' },
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    minHeight: { xs: '300px', md: '400px' },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={step.image}
                                    alt={step.title}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>

                            {/* Text Section */}
                            <Box
                                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                                data-aos-delay={400 + (index * 100)}
                                sx={{
                                    flex: 1,
                                    maxWidth: { xs: '100%', md: '600px' },
                                }}
                            >
                                {/* Step Indicator */}
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        backgroundColor: '#4A4A4A',
                                        borderRadius: '8px',
                                        px: 2,
                                        py: 1,
                                        mb: 2,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                            color: 'white',
                                            fontWeight: 600,
                                            letterSpacing: '0.5px',
                                        }}
                                    >
                                        {step.steps}
                                    </Typography>
                                </Box>

                                {/* Title */}
                                <Typography
                                    variant="h3"
                                    className="monserrat"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: '32px', sm: '40px', md: '48px', lg: '56px' },
                                        lineHeight: 1.3,
                                        mb: 3,
                                        color: 'white',
                                    }}
                                >
                                    {step.title}
                                </Typography>

                                {/* Bullet Points */}
                                <List
                                    dense
                                    sx={{
                                        listStyleType: 'disc',
                                        pl: 3,
                                    }}
                                >
                                    {step.points.map((point, pointIndex) => (
                                        <ListItem
                                            key={pointIndex}
                                            sx={{
                                                display: 'list-item',
                                                py: 0.5,
                                                pl: 0,
                                            }}
                                        >
                                            <ListItemText
                                                primary={point}
                                                primaryTypographyProps={{
                                                    sx: {
                                                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                                        fontWeight: 400,
                                                        lineHeight: 1.6,
                                                        color: 'white',
                                                    },
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Container>
        </Box>
    );
}

export default ProcessSection;

