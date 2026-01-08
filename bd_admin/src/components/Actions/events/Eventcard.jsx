import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { Edit, Delete } from "@mui/icons-material";
import moment from "moment";

export default function EventCard(props) {
  const { name, colleges, image, date, onEditClick, onDeleteClick } = props;
  const ActualDate = moment(date).format("DD-MM-YYYY");

  const port = import.meta.env.VITE_BACKEND_PORT;
  // Use uploaded image if available, otherwise use default
  const imagePath = image ? `${port}Events/${image}` : './cardImage.jpg';

  const handleEditClick = (e) => {
    e.stopPropagation();
    onEditClick();
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDeleteClick();
  };

  return (
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
        cursor: "pointer",
        position: "relative"
      }}
      onClick={handleEditClick}
    >
      <CardActionArea sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="140"
          image={imagePath}
          alt={name}
          sx={{
            objectFit: "cover"
          }}
        />
        <CardContent sx={{ 
          textAlign: "center", 
          flexGrow: 1, 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center",
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
              margin: "0",
              fontSize: "1rem"
            }}
          >
            {"Event Date: " + ActualDate}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      {/* Action buttons overlay */}
      <div 
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          display: "flex",
          gap: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "20px",
          padding: "4px"
        }}
      >
        <IconButton
          size="small"
          onClick={handleEditClick}
          sx={{
            color: "#1976d2",
            "&:hover": {
              backgroundColor: "rgba(25, 118, 210, 0.1)"
            }
          }}
          title="Edit Event"
        >
          <Edit fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          onClick={handleDeleteClick}
          sx={{
            color: "#d32f2f",
            "&:hover": {
              backgroundColor: "rgba(211, 47, 47, 0.1)"
            }
          }}
          title="Delete Event"
        >
          <Delete fontSize="small" />
        </IconButton>
      </div>
    </Card>
  );
}
