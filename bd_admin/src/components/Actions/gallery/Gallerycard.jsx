import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function GalleryCard(props) {
  const filename = props.image;
  const onDelete = props.onDelete;
  const port = import.meta.env.VITE_BACKEND_PORT;

  const finalPath =  filename;

  // Set the base URL to point to your server (running on port 3001)
  const baseUrl = port; // Adjust this if the server's URL is different
  // const imageUrl = `${baseUrl}${imgPath.replace("\\", "/blooddonationadmin")}`; // Replace backslashes with forward slashes for correct URLs/

  return (
    <Card
      sx={{
        width: 325, // Fixed width for the card
        borderRadius: 2, // Rounded corners
        boxShadow: 3, // Shadow for depth
        transition: "transform 0.3s, box-shadow 0.3s", // Transition effects
        "&:hover": {
          transform: "scale(1.02)", // Slight zoom effect on hover
          boxShadow: 5, // Increased shadow on hover
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140" // Fixed height for image
          // image={port + `%${imgPath}.jpg`} // Dynamic image URL
          image={finalPath} 
          
          
          alt={"image"} // Alt text for accessibility
        />
        <CardContent>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Button
              variant="outlined"
              color="error"
              onClick={onDelete} // Open the confirmation modal
            >
              Delete
            </Button>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
