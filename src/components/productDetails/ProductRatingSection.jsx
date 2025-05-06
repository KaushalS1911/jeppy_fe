import React, { useState } from 'react';
import { Box, Typography, Rating, TextField, Container } from '@mui/material';

const ProductRatingSection = () => {
    const [value, setValue] = useState(0);
    const [feedback, setFeedback] = useState('');

    return (
        <Container maxWidth={"xl"} sx={{ py: 4 }}>
            <Box textAlign="center">
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'orange', mb: 2 ,fontSize:'24px'}}>
                    Rate our Product
                </Typography>

                {/* Star Rating */}
                <Rating
                    name="product-rating"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{ fontSize: '44px' }} // Custom large size
                />


                {/* Feedback Text Area */}
                <Box mt={4} maxWidth={600} mx="auto">
                    <TextField
                        fullWidth
                        multiline
                        minRows={5}
                        placeholder="write your feedback here..."
                        variant="outlined"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        sx={{
                            borderRadius: 2,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                            },
                        }}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default ProductRatingSection;
