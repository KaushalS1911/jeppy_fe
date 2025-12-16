import React, { useState, useMemo, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  InputBase,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

import { productsData } from "../../data/productsData.js";

// Import fallback images
import img2d from "../../assets/images/products/2d.PNG";
import img3d from "../../assets/images/products/3d.PNG";
import imgMicro from "../../assets/images/products/micropellets.PNG";
import imgSheeted from "../../assets/images/products/sheeted-and-papd.PNG";

// Map categories to images
const categoryImageMap = {
  "2D": img2d,
  "3D": img3d,
  SHEETED: imgSheeted,
};

// Get unique categories from productsData
const getUniqueCategories = () => {
  const categories = new Set(productsData.map((product) => product.category));
  return ["All", ...Array.from(categories).sort()];
};

// Get unique suitability options from productsData
const getUniqueSuitability = () => {
  const suitabilitySet = new Set();
  productsData.forEach((product) => {
    if (product.suitability && Array.isArray(product.suitability)) {
      product.suitability.forEach((item) => suitabilitySet.add(item));
    }
  });
  return Array.from(suitabilitySet).sort();
};

// Get unique types from productsData
const getUniqueTypes = () => {
  const types = new Set(productsData.map((product) => product.type));
  return Array.from(types).sort();
};

// Get image for product
const getProductImage = (product) => {
  if (product.image) return product.image;
  return categoryImageMap[product.category] || img2d;
};

const categories = getUniqueCategories();
const suitabilityOptions = getUniqueSuitability();
const typeOptions = getUniqueTypes();

const productData = productsData.map((product) => ({
  id: product.id,
  name: product.name,
  image: getProductImage(product),
  category: product.category,
  type: product.type,
  suitability: product.suitability || [],
  description: product.description || "",
  productCode: product.productCode || "",
}));

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [preferenceFilter, setPreferenceFilter] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = useMemo(() => {
    return productData.filter((product) => {
      // Category filter
      const categoryMatch =
        activeCategory === "All" || product.category === activeCategory;

      // Enhanced search filter - search across name, type, description, and product code
      const searchLower = searchTerm.toLowerCase();
      const searchMatch =
        !searchTerm ||
        product.name.toLowerCase().includes(searchLower) ||
        product.type.toLowerCase().includes(searchLower) ||
        (product.description &&
          product.description.toLowerCase().includes(searchLower)) ||
        (product.productCode &&
          product.productCode.toLowerCase().includes(searchLower));

      // Type filter
      const typeMatch = !typeFilter || product.type === typeFilter;

      // Preference filter (suitability-based)
      const preferenceMatch =
        !preferenceFilter ||
        (product.suitability &&
          product.suitability.some(
            (item) =>
              item.toLowerCase() === preferenceFilter.toLowerCase() ||
              item.toLowerCase().includes(preferenceFilter.toLowerCase())
          ));

      return categoryMatch && searchMatch && typeMatch && preferenceMatch;
    });
  }, [activeCategory, searchTerm, typeFilter, preferenceFilter]);

  // Reset showAll when filters change
  useEffect(() => {
    setShowAll(false);
  }, [activeCategory, searchTerm, typeFilter, preferenceFilter]);

  // Display only 8 products initially, or all if showAll is true
  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  const hasMoreProducts = filteredProducts.length > 8;

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
          className="jua"
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
          className="jua"
          textAlign="center"
          sx={{
            color: "white",
            fontSize: {
              xs: "2.5rem",
              sm: "3.5rem",
              md: "4.2rem",
              lg: "5.8rem",
            },
            fontWeight: 600,
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
              {/* Type Dropdown */}
              <FormControl
                sx={{
                  minWidth: { xs: "48%", sm: 150 },
                  "& .MuiInputBase-root": {
                    height: "48px",
                  },
                }}
              >
                <Select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
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
                        maxHeight: 300,
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
                    Type
                  </MenuItem>
                  {typeOptions.map((type) => (
                    <MenuItem key={type} value={type} sx={{ color: "#000" }}>
                      {type}
                    </MenuItem>
                  ))}
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
                  {suitabilityOptions.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      sx={{ color: "#000" }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Products Grid */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, sm: 2.5, md: 2, lg: 3 },
              mb: 4,
              justifyContent: "flex-start",
            }}
          >
            {displayedProducts.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: {
                    xs: "calc(50% - 8px)", // 2 per row on mobile
                    sm: "calc(50% - 10px)", // 2 per row on small tablets
                    md: "calc(25% - 18px)", // 4 per row on medium screens
                    lg: "calc(25% - 23px)", // 4 per row on large screens
                  },
                  display: "flex",
                  justifyContent: "center",
                  minWidth: 0, // Prevent flex items from overflowing
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
                      maxWidth: "100%",
                      "&:hover": {
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        mb: 1.5,
                        backgroundColor: "#fafafa",
                        borderRadius: "12px",
                        p: { xs: 2, md: 2.5 },
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.name}
                        sx={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          width: "auto",
                          height: "auto",
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
              </Box>
            ))}
          </Box>

          {/* View More Button */}
          {hasMoreProducts && !showAll && (
            <Box
              display="flex"
              justifyContent="center"
              sx={{ mt: { xs: 4, md: 5 } }}
            >
              <Button
                variant="contained"
                onClick={() => setShowAll(true)}
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
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
