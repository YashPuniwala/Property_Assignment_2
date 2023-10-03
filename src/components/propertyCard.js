import React from "react";
import {
  Box,
  Zoom,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import ChairIcon from "@mui/icons-material/Chair";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 400, sm: 600 },
        background: "white",
        borderRadius: "20px",
        padding: "5px",
      }}
    >
      <CardMedia
        sx={{
          height: { xs: 300, sm: 250 },
          width: { xs: 200, sm: 320 },
          borderRadius: "20px",
        }}
        image={property.image}
        title={property.name}
      >
        <Box sx={{display:"flex", justifyContent:'space-between'}}>

        <Typography
          sx={{
            width: "70px",
            backgroundColor: "#1852ad",
            color: "white",
            padding: "5px",
            borderRadius:"20px",
            marginTop:"10px",
            marginLeft:"10px",
            textAlign:"center"
          }}
        >
          {property.purpose}
        </Typography>
        <IconButton sx={{backgroundColor:"white", marginTop:"10px", marginRight:"10px"}}>
            <FavoriteBorderIcon fontSize="small"/>
        </IconButton>
        </Box>
      </CardMedia>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alingItems: "center",
            marginBottom: "10px",
          }}
        >
          <Typography
            variant="subtitle2"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {property.name}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alingItems: "center",
          }}
        >
          <Box display="flex" alignItems="center" flexDirection="column">
            <IconButton>
              <ChairIcon />
            </IconButton>
            <Typography variant="body2" color="textPrimary">
              {property.rooms}
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            sx={{ marginRight: "9px" }}
          >
            <IconButton>
              <BedIcon />
            </IconButton>
            <Typography variant="body2" color="textPrimary">
              {property.bedrooms}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" flexDirection="column">
            <IconButton>
              <BathtubIcon />
            </IconButton>
            <Typography variant="body2" color="textPrimary">
              {property.bathrooms}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" flexDirection="column">
            <IconButton>
              <HomeIcon />
            </IconButton>
            <Typography variant="body2" color="textPrimary">
              {/* ${car.price.toLocaleString()} */}
              {property.squareFeet}
            </Typography>
          </Box>
        </Box>

        <hr
          style={{
            marginBottom: "20px",
            marginTop: "10px",
            backgroundColor: "gray",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alingItems: "center",
          }}
        >
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{ marginTop: "4px", color: "#1852ad" }}
          >
            ${property.price.toLocaleString()} <sub>/month</sub>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              sx={{
                cursor: "pointer",
                marginBottom: "2px",
                borderRadius: "15px",
                padding: "5px",
                marginRight: "5px",
              }}
            ></IconButton>

            <Link to={`/property/${property.id}`}>
              <button
                style={{
                  width: "100px",
                  height: "35px",
                  borderRadius: "20px",
                  marginBottom: "2px",
                  border: "1px solid #1852ad",
                  color: "#1852ad",
                  cursor: "pointer",
                }}
              >
                Read More
              </button>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
