import React from "react";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Experts = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Container maxWidth={"xl"} sx={{ py: { xs: 4, md: 5 } }}>
      <Box
        sx={{
          backgroundColor: "#FFF8F1",
          borderRadius: 2,
          p: { xs: 3, md: 8 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 3, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: `${theme.palette.saffron}`,
            fontWeight: 700,
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            lineHeight: 1.2,
          }}
        >
          Ready to Take Your Snack
          <Box
            component="br"
            sx={{ display: { xs: "none", md: "block" } }}
          />{" "}
          Line to the Next Level?
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/about")}
          sx={{
            backgroundColor: `${theme.palette.saffron}`,
            color: "white",
            borderRadius: 28,
            px: 4,
            py: 1.5,
            textTransform: "none",
            fontWeight: 800,
            fontSize: { xs: "16px", sm: "18px", md: "24px" },
            whiteSpace: "nowrap",
            border: `2px solid ${theme.palette.saffron}`,
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#fff",
              color: `${theme.palette.saffron}`,
            },
          }}
        >
          Talk to Our Product Experts
        </Button>
      </Box>
    </Container>
  );
};

export default Experts;
