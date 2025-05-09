import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import vector1 from '../../assets/images/home/ourSolution/Group 1000001767.png'
import vector2 from '../../assets/images/home/ourSolution/Vector (2).png'
import vector3 from '../../assets/images/home/ourSolution/Group.png'
import vector4 from '../../assets/images/home/ourSolution/Vector 5.png'

function OurSolution() {

    const solution = [
        {
            img: vector1,
            title: "Development",
            description: "We are working on continuous and accurate developments to meet the food market requirements.",
        },
        {
            img: vector2,
            title: "Packaging",
            description: "Our packaging lines designed to meet all needs to cover all food bazaar and ready to eat products.",
        },
        {
            img: vector3,
            title: "Quality",
            description: "From raw materials to packaging machine we preserve the fineness by meeting the highest criteria.",
        },

    ]

    return (
        <Box sx={{py: {xs: 5, md: 10} , backgroundColor:"#F4F4F4"}}>
            <Container maxWidth="xl">
                <Typography className={'monserrat'} sx={{
                    fontSize: {md: "36px", sm: "28px", xs: "20px"},
                    fontWeight: 700,
                    textAlign: "center",
                }}>
                    Our Solution
                </Typography>
                <Box
                    sx={{
                        maxWidth: "600px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto"
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {md: "18px", sm: "15px", xs: "12px"},
                            textAlign: "center",
                            width: "100%",
                            pb:10
                        }}
                    >
                        Reliable process line is the success factor and primary element in the snack pellet industry.
                        Discover our solutions coverage area.
                    </Typography>
                </Box>
                <Box sx={{display: {sm:"flex" , xs:"unset "}, justifyContent: "center" , alignItems: "center"}}>
                    {solution.map((item, index) => (
                        <Box key={index + 1} sx={{display:"flex", justifyContent: "center", alignItems: {sm:"center" , md:"start"} , p:{xs:"20px 0"}}}>
                            <Box>
                                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <Box sx={{
                                        borderRadius: "25px",
                                        backgroundColor: "#FDEFDF",
                                        display: "inline-block",
                                        p: "15px 20px",
                                    }}>
                                        <img src={item.img}
                                             style={{height: "36px", width: "36px", objectFit: "contain"}}
                                             alt={item.title}/>
                                    </Box>
                                </Box>
                                <Typography sx={{
                                    color: "#1A202C",
                                    fontSize: {md: "24px", sm: "20px", xs: "16px"},
                                    fontWeight: 600,
                                    textAlign: "center",
                                    py:2
                                }}>
                                    {item.title}
                                </Typography>
                                <Box sx={{fontSize: {sm: "16px", xs: "14px"}, color: "#1A202C", textAlign: "center"}}>
                                    {item.description}
                                </Box>
                            </Box>
                            <Box sx={{display:{ xs:"none" , sm:"unset" }}}>
                                {index !== solution.length - 1 && (
                                    <Box>
                                        <img src={vector4} style={{width:"100%"}}/>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default OurSolution;