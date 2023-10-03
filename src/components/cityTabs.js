import React from "react";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const CityTabs = ({
  cities,
  selectedCity,
  onCityChange,
  handleRemoveFilter,
}) => {
  const handleTabClick = (city) => {
    if (selectedCity === city) {
      handleRemoveFilter();
    } else {
      onCityChange(city);
    }
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}
    >
      {cities.map((city, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            borderRadius: "20px",
            cursor: "pointer",
            marginRight: "25px",
            position: "relative",
            backgroundColor: selectedCity === city ? "#1852ad" : "white",
            color: selectedCity === city ? "white" : "black",
            marginBottom: "20px",
          }}
          onClick={() => handleTabClick(city)}
        >
          <Typography variant="body1" sx={{ padding: "8px" }}>
            {city}
          </Typography>
        </Paper>
      ))}
      {selectedCity && (
        <IconButton
          onClick={handleRemoveFilter}
          sx={{ width: "40px", marginBottom: "15px" }}
        >
          <CancelIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default CityTabs;
