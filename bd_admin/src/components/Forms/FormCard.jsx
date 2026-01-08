import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import moment from "moment";


// import EventImage from  '../../assets/EventImage.jpg'

export default function EventCard(props) {
  // const port = import.meta.env.REACT_APP_SERVER_PORT;
  // {console.log(props)}
  const { name, venue, image, date} = props;
  const ActualDate =   moment(date).format('DD-MM-YYYY');
  const port = import.meta.env.VITE_BACKEND_PORT;


  const finalPath = port + "Events/" + image;

  return (
    <>
      <Card
        sx={{
          width: 325,
          height: 280, // Fixed height for consistency
          borderRadius: 2,
          boxShadow: 3,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: 5,
          },
          display: "flex",
          flexDirection: "column",
          alignContent: "center"
        }}
      >
        <CardActionArea sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="img"
            height="140"
            image={image ? finalPath : "./cardImage.jpg"}
            alt={name}
            sx={{
              objectFit: "cover"
            }}
          />
          <CardContent sx={{ 
            flexGrow: 1, 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center",
            textAlign: "center",
            padding: "16px"
          }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ 
                textAlign: "center", 
                fontWeight: "bold",
                fontSize: "1.1rem",
                lineHeight: "1.3",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                marginBottom: "8px"
              }}
            >
              {name}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              style={{
                textAlign: "center",
                fontFamily: "sans-serif", 
                color: "black",
                fontSize: "1rem"
              }}
            >
              Event Date: {ActualDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
