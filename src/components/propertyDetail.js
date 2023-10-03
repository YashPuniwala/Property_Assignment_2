import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Button, Paper, Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { grey, blue } from "@mui/material/colors"; // Import color palette

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
    width: "80%",
    display:"flex",
    justifyContent:"space-between",
    textAlign:"end"
  },
  image: {
    maxWidth: "100%",
    borderRadius: "8px", // Add a border radius for the image
  },
}));

const PropertyDetail = ({ data }) => {
  const { id } = useParams();
  const classes = useStyles();

  const property = data.find((property) => property.id === parseInt(id));

  if (!property) {
    return (
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h4">Property not found</Typography>
      </Box>
    );
  }

  return (
    <Stack
      sx={{
        backgroundColor: "#DCE3E3",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} className={classes.root}>
        <Box>
          <img
            src={property.image}
            alt={property.name}
            className={classes.image}
          />
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            {property.name}
          </Typography>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            {property.address}
          </Typography>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            Rooms: {property.rooms}
          </Typography>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            Bedrooms: {property.bedrooms}
          </Typography>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            Bathrooms: {property.bathrooms}
          </Typography>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            Square Feet: {property.squareFeet}
          </Typography>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            Price: ${property.price.toLocaleString()} /month
          </Typography>
        </Box>
      </Paper>
    </Stack>
  );
};

export default PropertyDetail;
