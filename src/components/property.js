import React, { useState } from "react";
import { Stack, Typography, Box, Grid, Paper } from "@mui/material";
import PropertyCard from "./propertyCard";
import CityTabs from "./cityTabs"; // Import the CityTabs component
import TimerIcon from "@mui/icons-material/Timer";
import { Button, IconButton } from "@material-ui/core";

const Property = ({ data }) => {
  const cities = [...new Set(data.map((property) => property.city))];
  const [selectedCity, setSelectedCity] = useState(null);
  const [visibleProperties, setVisibleProperties] = useState(6);
  const propertiesToShow = 3;

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleRemoveFilter = () => {
    setSelectedCity(null); 
    console.log("Clicked");
  };

  const filteredProperties = selectedCity
    ? data.filter((property) => property.city === selectedCity)
    : data;

  const handleShowMore = () => {
    setVisibleProperties((prevVisible) => prevVisible + propertiesToShow);
  };

  return (
    <Box
      sx={{
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "20px",
        backgroundColor: "#DCE3E3",
        height: "auto",
      }}
    >
      <CityTabs
        cities={cities}
        selectedCity={selectedCity}
        onCityChange={handleCityChange}
        handleRemoveFilter={handleRemoveFilter}
      />
      <Grid container spacing={4}>
        {filteredProperties.slice(0, visibleProperties).map((property) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={property.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>

      {filteredProperties.length > visibleProperties && (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
          <button
            onClick={handleShowMore}
            style={{
              backgroundColor: "#1852ad",
              width: "140px",
              height: "40px",
              border: "none",
              borderRadius: "20px",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
              marginBottom:"30px"
            }}
          >
            Show More
          </button>
        </Box>
      )}
    </Box>
  );
};

export default Property;
