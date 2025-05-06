import React from 'react';
import {Box, Typography, List, ListItem, ListItemText, useTheme} from '@mui/material';
import imgstep3 from "../../assets/images/ourprocess/ManufacturingProcessSteps/Hygiene&Automation.png";

function Ourprocessstep3() {
    const theme = useTheme();

    const data = [
        {
            steps: "STEP 3",
            title: "Hygiene & Automation",
            points: [
                "The entire production line is 100% automated, ensuring:",
                " No human touch",
                " Top-tier hygiene standards",
                " Efficient mass production (up to 75,000 metric tons/year)",
            ],
            image: imgstep3,
        }
    ];

    return (
        <Box sx={{ backgroundColor: `${theme.palette.saffron}` }}>
            <Box sx={{margin: {sm: '0 30px', lg: "0 auto", xs: "0 10px"}}}>
                {data.map((item, index) => (
                    <Box key={index} sx={{
                        display: 'flex',
                        py: 8,
                        flexDirection: {xs: 'column', lg: 'row'},
                        justifyContent: 'space-between',
                        alignItems: {lg:'center' , xs:"unset"},
                    }}>
                        <Box sx={{
                            pl: {xs: 2, sm: 4, md: 6, lg: 6},
                            py: {xs: 1, sm: 2, md: 3, lg: 4},
                        }}>
                            <Typography variant="h5" sx={{
                                fontSize: {xl: "24px", sm: "20px", xs: "16px"},
                                lineHeight: '24px',
                                color: "#FFF",
                                fontWeight: 300,
                                mr: 2,
                            }}>
                                {item.steps}
                            </Typography>

                            <Typography variant="h6" sx={{
                                mb: 2,
                                fontWeight: 700,
                                fontSize: {xl: "48px", sm: "36px", xs: "32px"},
                            }}>
                                {item.title}
                            </Typography>

                            <List
                                dense
                                sx={{
                                    listStyleType: 'disc',
                                    pl: 4,
                                    fontWeight: 500,
                                    fontSize: { xl: '24px', sm: '20px', xs: '16px' },
                                }}
                            >
                                {item.points.map((point, pointIndex) => (
                                    <ListItem key={pointIndex} sx={{ display: 'list-item', color: '#fff' }}>
                                        <ListItemText
                                            primary={point}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontSize: { xl: '24px', sm: '20px', xs: '16px' },
                                                    fontWeight: 500,
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                        </Box>

                        <Box sx={{height: {lg:"470px" , xs:"100%"} , alignItems: 'center',display:"flex"}}>
                            <img
                                src={item.image}
                                alt={`${item.title} illustration`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Ourprocessstep3;
