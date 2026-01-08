import React, { useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";

function LoginForm() {
  // Function to get today's date
  const getCurrentDate = () => {
    const today = new Date();
    const date = today.toISOString().split('T')[0]; // Get date in YYYY-MM-DD format
    return date;
  };

  // // const port = import.meta.env.REACT_APP_SERVER_PORT;
  // Function to make the axios call with the current date
  const makeApiCall = async () => {
    const currentDate = getCurrentDate(); // Get today's date
    const port = import.meta.env.VITE_BACKEND_PORT;

    try {
      // Send the date to the API (use your actual API URL)
      const response = await axios.post(port + "validate-login", {
        date: currentDate,
      });

      // Handle the response here (e.g., display a success message, etc.)
      console.log(response.data); // Example: log the response
    } catch (error) {
      // Handle error
      console.error("Error making API call", error);
    }
  };

  // Call makeApiCall when the component is mounted
  useEffect(() => {
    makeApiCall();
  }, []); // Empty dependency array to call it only once when component mounts

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#f8fbff" }}
    >
      {/* Card Section */}
      <Card
        sx={{
          width: 400,
          borderRadius: 3,
          boxShadow: 5,
          p: 3, // Padding inside the card
          mb: 2,
        }}
      >
        <CardContent>
          {/* Logo Image */}
          <Box display="flex" justifyContent="center" mb={2} mt={1}>
            <img
              src="/logo.png" // Path to your logo image
              alt="Logo"
              style={{
                width: "400px",
                height: "80px",
                marginBottom: "-20px",
              }}
            />
          </Box>

          {/* Sign In Title */}
          <Typography
            variant="h6"
            fontWeight="500"
            textAlign="center"
            gutterBottom
            sx={{
              fontSize: "1.2rem",
              marginTop: 2,
              marginBottom: 2,
            }}
            style={{
              fontWeight: "550",
              fontSize: "1.4rem",
              marginTop: 2,
              marginBottom: "10px",
              fontFamily: "Poppins",
            }}
          >
            Sign in to continue
          </Typography>

          {/* Username Field */}
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Enter username"
          />

          {/* Password Field */}
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            placeholder="Enter password"
          />

          {/* Remember Me Checkbox */}
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ mb: 2 }}
            style={{ marginBottom: "20px" }}
          />

          {/* Sign In Button with Shiny Effect */}
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              background: "linear-gradient(145deg, #222, #444)",
              color: "#fff",
              ":hover": {
                background: "linear-gradient(145deg, #444, #666)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
              },
              transition: "all 0.3s ease",
              fontWeight: "bold",
            }}
          >
            Sign in
          </Button>
        </CardContent>
      </Card>

      {/* Footer Section */}
      <Box
        textAlign="center"
        sx={{
          color: "#555",
          fontSize: "0.9rem",
          pb: 3,
        }}
      >
        <Typography variant="body2" style={{ marginTop: "20px" }}>
          © 2024 Blood donation - Crafted with{" "}
          <span style={{ color: "red" }}>❤️</span> by Technical Hub.
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginForm;
