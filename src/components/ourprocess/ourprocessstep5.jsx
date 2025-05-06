import React from 'react';
import {Box, Typography, List, ListItem, ListItemText, useTheme} from '@mui/material';
import imgstep5 from "../../assets/images/ourprocess/ManufacturingProcessSteps/Packaging&Storage.png"

function Ourprocessstep5() {

    const theme = useTheme();

    const data = [
        {
            steps: "STEP 5",
            title: "Packaging & Storage",
            intro: "Final products are:",
            points: [
                "Checked again",
                "Safely packaged",
                "Stored in hygienic conditions",
            ],
            footer: "Ready for dispatch to domestic and international markets.",
            image: imgstep5,
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
                    }}>
                        <Box sx={{
                            pl: {xs: 2, sm: 4, md: 6, lg: 6},
                            py: {xs: 1, sm: 2, md: 3, lg: 4},
                            maxWidth: '600px',
                        }}>
                            <Typography variant="h5" sx={{
                                fontSize: {xl: "24px", sm: "20px", xs: "16px"},
                                lineHeight: '24px',
                                fontWeight: 300,
                                mb: 1,
                                color:"#FFF"
                            }}>
                                {item.steps}
                            </Typography>

                            <Typography variant="h6" sx={{
                                mb: 2,
                                fontWeight: 700,
                                fontSize: {xl: "48px", sm: "36px", xs: "32px"},
                                color: "#FFF",
                            }}>
                                {item.title}
                            </Typography>

                            <Typography sx={{
                                fontSize: {xl: "24px", sm: "20px", xs: "18px"},
                                fontWeight: 500,
                                mb: 1,
                                color:"#FFF"
                            }}>
                                {item.intro}
                            </Typography>

                            <List dense sx={{
                                listStyleType: 'disc',
                                pl: 2,
                                fontWeight: 500,
                                fontSize: {xl: "24px", sm: "20px", xs: "18px"},
                            }}>
                                {item.points.map((point, pointIndex) => (
                                    <ListItem key={pointIndex} sx={{display: 'list-item' , color:"#FFF"}}>
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

                            <Typography sx={{
                                mt: 2,
                                fontSize: {xl: "24px", sm: "20px", xs: "18px"},
                                fontWeight: 500,
                                color:"#FFF"
                            }}>
                                {item.footer}
                            </Typography>
                        </Box>

                        <Box>
                            <img
                                src={item.image}
                                alt={`${item.title} illustration`}
                                style={{width: '100%', height: '100%'}}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Ourprocessstep5;
