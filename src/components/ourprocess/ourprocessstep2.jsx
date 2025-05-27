import React, {useState} from 'react';
import {Box, Typography, List, ListItem, ListItemText} from '@mui/material';
import imgstep2 from "../../assets/images/ourprocess/ManufacturingProcessSteps/CoreProductionProcess.png";
import 'aos/dist/aos.css';

function Ourprocessstep2() {

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

    const data = [
        {
            steps: "STEP 2",
            title: "Core Production",
            points: [
                "Ingredients are precisely measured, sieved, mixed, and moisturized into dough",
                "Dough is cooked, shaped (2D, 3D, or sheeted), cut, and dried",
                "Ensures consistent texture, shape, and shelf-stable pellets",
                // "Moisturizing: Adds moisture to form dough.",
                // "Cooking: Cooks the mixture for texture.",
                // "Forming: Shapes snacks (2D, 3D, or sheeted).",
                // "Cutting: Cuts into required sizes.",
                // "Drying: Removes moisture for storage/frying.",
            ],
            image: imgstep2,
        }
    ];

    return (
        <Box sx={{margin: {sm: '0 30px', lg: "0 auto", xs: "0 10px"}}}>
            {data.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        py: 8,
                        flexDirection: {xs: 'column', lg: 'row'},
                        justifyContent: 'start',
                    }}
                >
                    <Box
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            ...shineEffectStyles
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img
                            src={item.image}
                            alt={`${item.title} illustration`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: "contain",
                                transition: "transform 0.5s ease",
                                transform: isHovered ? "scale(1.05)" : "scale(1)",
                            }}
                        />
                    </Box>

                    <Box
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        sx={{
                            py: {xs: 2, sm: 3, md: 4, lg: 4},
                            pl: {lg: 8, xs: "unset"}
                        }}
                    >
                        <Typography
                            data-aos="fade-up"
                            data-aos-delay="200"
                            variant="h5"
                            sx={{
                                fontSize: {xl: "24px", sm: "20px", xs: "16px"},
                                lineHeight: '24px',
                                color: "rgba(242, 138, 30, 1)",
                                fontWeight: 300,
                            }}
                        >
                            {item.steps}
                        </Typography>

                        <Typography
                            data-aos="fade-up"
                            data-aos-delay="300"
                            variant="h6"
                            className={'monserrat'}
                            sx={{
                                my: 2,
                                fontWeight: 700,
                                fontSize: {xl: "44px", sm: "34px", xs: "30px"},
                                textWrap: "wrap",
                            }}
                        >
                            {item.title}
                        </Typography>

                        <List
                            data-aos="fade-up"
                            data-aos-delay="400"
                            dense
                            sx={{
                                listStyleType: 'disc',
                                pl: 3,
                                fontWeight: 500,
                                fontSize: {xl: "22px", sm: "18px", xs: "16px"},
                            }}
                        >
                            {item.points.map((point, pointIndex) => (
                                <ListItem
                                    key={pointIndex}
                                    data-aos="fade-up"
                                    data-aos-delay={400 + (pointIndex * 100)}
                                    sx={{display: 'list-item'}}
                                >
                                    <ListItemText
                                        primary={point}
                                        primaryTypographyProps={{
                                            sx: {
                                                fontSize: {xl: "22px", sm: "18px", xs: "16px"},
                                                fontWeight: 500,
                                            },
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Ourprocessstep2;
