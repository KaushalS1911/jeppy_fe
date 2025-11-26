import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  InputBase,
  Grid,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

import { productsData } from "../../data/productsData.js";

const categories = [
  "All",
  "Cereal Pellets",
  "Potato Pellets",
  "Millet Pellets",
  "Lentil Pellets",
  "Low Sodium Pellets",
];

const productData = productsData.map((product) => ({
  id: product.id,
  name: product.name,
  image: product.image,
  category: product.category,
}));

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [shapeFilter, setShapeFilter] = useState("");
  const [preferenceFilter, setPreferenceFilter] = useState("");

  const filteredProducts = productData.filter(
    (product) =>
      (activeCategory === "All" || product.category === activeCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        backgroundColor: "#C37A3D",
        width: "100%",
        minHeight: "100vh",
        pt: 24,
        pb: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        {/* Title Section */}
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            color: "white",
            fontSize: {
              xs: "1.5rem",
              sm: "1.8rem",
              md: "2.2rem",
              lg: "2.5rem",
            },
            fontWeight: 400,
            mb: 0.5,
            lineHeight: 1.3,
            letterSpacing: "0.5px",
          }}
        >
          The Industry's Most Extensive
        </Typography>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            color: "white",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem", lg: "3.8rem" },
            fontWeight: 700,
            mb: { xs: 4, md: 6 },
            letterSpacing: "0.5px",
          }}
        >
          Shape Library
        </Typography>

        {/* White Card Container */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: { xs: 3, md: 5 },
            p: { xs: 3, sm: 4, md: 5, lg: 6 },
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Category Buttons */}
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap={{ xs: 1.5, sm: 2 }}
            mb={{ xs: 4, md: 5 }}
            sx={{
              overflowX: { xs: "auto", md: "visible" },
              pb: { xs: 1, md: 0 },
            }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                sx={{
                  backgroundColor:
                    activeCategory === category ? "#F97316" : "transparent",
                  color: activeCategory === category ? "white" : "#666",
                  textTransform: "none",
                  fontWeight: activeCategory === category ? 600 : 500,
                  borderRadius: "10px",
                  px: { xs: 2.5, md: 3.5 },
                  py: { xs: 1, md: 1.25 },
                  whiteSpace: "nowrap",
                  minWidth: "auto",
                  fontSize: { xs: "14px", md: "15px" },
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor:
                      activeCategory === category ? "#F97316" : "#f5f5f5",
                  },
                }}
              >
                {category}
              </Button>
            ))}
          </Box>

          {/* Search and Filters Row */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
            mb={{ xs: 4, md: 6 }}
            flexWrap="wrap"
            sx={{
              px: { xs: 0, md: 0 },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            {/* Search Box */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: { xs: "1 1 100%", sm: "0 1 auto" },
                width: "60%",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "10px",
                px: 2,
                py: 1.25,
                backgroundColor: "#F5F0E8",
                height: "48px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
              }}
            >
              <SearchIcon sx={{ color: "#888", mr: 1.5, fontSize: "20px" }} />
              <InputBase
                placeholder="Search"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  color: "#000",
                  fontSize: "15px",
                  "& input": {
                    padding: 0,
                    color: "#000",
                  },
                  "& input::placeholder": {
                    color: "#888",
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {/* Dropdowns Container */}
            <Box
              display="flex"
              gap={2}
              sx={{
                width: { xs: "100%", sm: "auto" },
                justifyContent: { xs: "space-between", sm: "flex-end" },
              }}
            >
              {/* Shapes Dropdown */}
              <FormControl
                sx={{
                  minWidth: { xs: "48%", sm: 150 },
                  "& .MuiInputBase-root": {
                    height: "48px",
                  },
                }}
              >
                <Select
                  value={shapeFilter}
                  onChange={(e) => setShapeFilter(e.target.value)}
                  displayEmpty
                  IconComponent={KeyboardArrowDownIcon}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        borderRadius: "10px",
                        mt: 1,
                        backgroundColor: "#F5F0E8",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        "& .MuiMenuItem-root": {
                          fontSize: "15px",
                          py: 1.5,
                          color: "#000",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                          },
                          "&.Mui-selected": {
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.05)",
                            },
                          },
                        },
                      },
                    },
                  }}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#F5F0E8",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    fontSize: "15px",
                    height: "48px",
                    color: "#000",
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                    "& .MuiSelect-select": {
                      py: 1.5,
                      px: 2,
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#000",
                    },
                  }}
                >
                  <MenuItem value="" sx={{ color: "#000" }}>
                    Shapes
                  </MenuItem>
                  <MenuItem value="2D" sx={{ color: "#000" }}>
                    2D Shapes
                  </MenuItem>
                  <MenuItem value="3D" sx={{ color: "#000" }}>
                    3D Shapes
                  </MenuItem>
                </Select>
              </FormControl>

              {/* Preference Dropdown */}
              <FormControl
                sx={{
                  minWidth: { xs: "48%", sm: 150 },
                  "& .MuiInputBase-root": {
                    height: "48px",
                  },
                }}
              >
                <Select
                  value={preferenceFilter}
                  onChange={(e) => setPreferenceFilter(e.target.value)}
                  displayEmpty
                  IconComponent={KeyboardArrowDownIcon}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        borderRadius: "10px",
                        mt: 1,
                        backgroundColor: "#F5F0E8",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        "& .MuiMenuItem-root": {
                          fontSize: "15px",
                          py: 1.5,
                          color: "#000",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                          },
                          "&.Mui-selected": {
                            backgroundColor: "rgba(0, 0, 0, 0.05)",
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.05)",
                            },
                          },
                        },
                      },
                    },
                  }}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "#F5F0E8",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    fontSize: "15px",
                    height: "48px",
                    color: "#000",
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                    "& .MuiSelect-select": {
                      py: 1.5,
                      px: 2,
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#000",
                    },
                  }}
                >
                  <MenuItem value="" sx={{ color: "#000" }}>
                    Preference
                  </MenuItem>
                  <MenuItem value="vegan" sx={{ color: "#000" }}>
                    Vegan
                  </MenuItem>
                  <MenuItem value="halal" sx={{ color: "#000" }}>
                    Halal
                  </MenuItem>
                  <MenuItem value="kosher" sx={{ color: "#000" }}>
                    Kosher
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Products Grid */}
          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 2, lg: 3 }}
            sx={{
              mb: 4,
              justifyContent: "flex-start",
            }}
          >
            {filteredProducts.map((item) => (
              <Grid
                item
                key={item.id}
                xs={6}
                sm={4}
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link
                  to={`/product/${item.id}`}
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      width: "100%",
                      maxWidth: { xs: "100%", sm: "200px", md: "100%" },
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        aspectRatio: "1",
                        maxHeight: {
                          xs: "160px",
                          sm: "180px",
                          md: "250px",
                          lg: "305px",
                        },
                        mb: 1.5,
                        backgroundColor: "#fafafa",
                        borderRadius: "12px",
                        p: { xs: 2, md: 2.5 },
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.name}
                        sx={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      sx={{
                        color: "#333",
                        fontSize: {
                          xs: "13px",
                          sm: "14px",
                          md: "14px",
                          lg: "15px",
                        },
                        letterSpacing: "0.3px",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>

          {/* View More Button */}
          <Box
            display="flex"
            justifyContent="center"
            sx={{ mt: { xs: 4, md: 5 } }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F97316",
                color: "white",
                borderRadius: "10px",
                px: { xs: 5, md: 7 },
                py: { xs: 1.25, md: 1.5 },
                textTransform: "none",
                fontWeight: 600,
                fontSize: { xs: "15px", md: "16px" },
                boxShadow: "0 4px 14px rgba(249, 115, 22, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#ea6b0a",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(249, 115, 22, 0.4)",
                },
              }}
            >
              View More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
