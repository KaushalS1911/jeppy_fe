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
            title: "Product Development",
            description: "Tailored snack solutions driven by market trends and R&D expertise.",
        },
        {
            img: vector3,
            title: "Quality Assurance",
            description: "Strict checks from raw material to final output for consistent excellence.",
        },
        {
            img: vector2,
            title: "Packaging & Delivery",
            description: "Flexible, retail-ready packaging lines built for global food markets.",
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
                    Our Process
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
                            fontSize: {md: "16px", sm: "14px", xs: "12px"},
                            textAlign: "center",
                            width: "100%",
                            pb:10
                        }}
                    >
                        A reliable process line is the backbone of success in the snack pellet industry. Explore how our solutions cover every stage of production.
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