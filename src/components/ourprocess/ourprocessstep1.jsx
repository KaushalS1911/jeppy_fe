import React from 'react';
import {Box, Typography, List, ListItem, ListItemText, Grid} from '@mui/material';
import imgstep1 from "../../assets/images/ourprocess/ManufacturingProcessSteps/RawMaterialProcurement.png";

function Ourprocessstep1() {
    const data = [
        {
            steps: "STEP 1",
            title: "Raw Material Procurement & Quality Testing",
            points: [
                "Raw materials such as potato, lentil, soya, rice, corn, and other vegetables are sourced from reputed suppliers.",
                {
                    text: "Before use, materials undergo strict quality tests:",
                    subpoints: [
                        "Moisture test",
                        "Density check",
                        "Ash content",
                        "pH level",
                        "Color & viscosity analysis"
                    ]
                },
                "Only materials passing these tests are used in production."
            ],
            image: imgstep1,
        }
    ];

    return (
        <Box sx={{ margin: {sm:'0 30px' , lg:"0 auto" , xs:"0 10px"}}}>
            {data.map((item, index) => (
                <Box sx={{
                    display: 'flex',
                    py:8,
                    flexDirection: { xs: 'column', lg: 'row' },
                    justifyContent: 'space-between',
                    alignItems:"center"
                }}>
                    <Box key={index} sx={{
                        pl: { xs: 2, sm: 4, md: 6, lg: 6 },
                        py: { xs: 1, sm: 2, md: 3, lg: 4 },
                    }}
                    >
                        <Typography variant="h5" sx={{
                            fontSize: { xl: "24px", sm: "20px", xs: "16px" },
                            lineHeight: '24px',
                            color: "rgba(242, 138, 30, 1)",
                            fontWeight: 300,
                            mr: 2,
                        }}>
                            {item.steps}
                        </Typography>
                        <Box sx={{flexGrow: 1}}>
                            <Box sx={{display: 'flex'}}>
                                <Box sx={{flex: 1}}>
                                    <Typography variant="h6" className={'monserrat'} sx={{
                                        my: 2,
                                        fontWeight: '700',
                                        fontSize: { xl: "44px", sm: "34px", xs: "30px" },
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <List dense sx={{
                                        listStyleType: 'disc',
                                        pl: 2 ,
                                        fontWeight: 500,
                                        fontSize: { xl: "22px", sm: "18px", xs: "16px" },

                                    }}>
                                        {item.points.map((point, pointIndex) => (
                                            <ListItem key={pointIndex} sx={{
                                                display: 'list-item',
                                            }}>
                                                {typeof point === 'string' ? (
                                                    <ListItemText
                                                        primary={point}
                                                        primaryTypographyProps={{
                                                            sx: {
                                                                fontSize: { xl: '22px', sm: '18px', xs: '16px' },
                                                                fontWeight: 500,
                                                            },
                                                        }}
                                                    />
                                                ) : (
                                                    <>
                                                        <ListItemText
                                                            primary={point.text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    fontSize: { xl: '22px', sm: '18px', xs: '16px' },
                                                                    fontWeight: 500,
                                                                },
                                                            }}
                                                        />
                                                        <List dense sx={{
                                                            listStyleType: 'disc',
                                                        }}>
                                                            {point.subpoints.map((subpoint, subIndex) => (
                                                                <ListItem key={subIndex} sx={{
                                                                    display: 'list-item',
                                                                    p: 0,
                                                                    pl: 1
                                                                }}>
                                                                    <ListItemText
                                                                        primary={subpoint}
                                                                        primaryTypographyProps={{
                                                                            sx: {
                                                                                fontSize: { xl: '22px', sm: '18px', xs: '16px' },
                                                                                fontWeight: 500,
                                                                            },
                                                                        }}
                                                                    />
                                                                </ListItem>
                                                            ))}
                                                        </List>
                                                    </>
                                                )}
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    <Box sx={{width:{lg:'1000px' , xs:"100%"}}}>
                        <img
                            src={item.image}
                            alt="Raw Material Procurement"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit:"cover"
                            }}
                        />
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Ourprocessstep1;