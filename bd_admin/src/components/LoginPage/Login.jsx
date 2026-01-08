import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../../context/AuthContext"; // Import useAuth hook
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
import toast, {Toaster} from "react-hot-toast";
import logo from '../../assets/logo.png'



const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(username, password, () => {
        navigate("/blooddonationadmin");
      });


      if (response === 1) {
        toast.error("Invalid credentials. Please try again");
      }
      else if (response === 1) {
        toast.error("Invalid credentials. Please try again")
      }
    } catch (error) {
      setError("Login failed, please try again.");
    }
  };

  return (
    <>
    <Toaster />
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#f8fbff" }}
    >
      <Card
        sx={{
          width: 400,
          borderRadius: 3,
          boxShadow: 5,
          p: 3,
          mb: 2,
        }}
      >
        <CardContent>
          {/* Logo Section */}
          <Box display="flex" justifyContent="center" mb={2} mt={1}>
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "400px",
                height: "80px",
                marginBottom: "-20px",
              }}
            />
          </Box>

          {/* Title Section with New Styling */}
          <Typography
            variant="h6"
            fontWeight="550"
            textAlign="center"
            gutterBottom
            sx={{
              fontSize: "1.4rem",
              marginTop: 2,
              marginBottom: "10px",
              fontFamily: "Poppins",
            }}
          >
            Sign in to continue
          </Typography>

          {error && (
            <Typography color="error" variant="body2" align="center" gutterBottom>
              {error}
            </Typography>
          )}

          {/* Form Section */}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputLabelProps={{ shrink: true }} // Always display the label above
              sx={{
                "& input": {
                  fontSize: "1rem", // Consistent font size for input text
                },
              }}
            />

            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{ shrink: true }} // Always display the label above
              sx={{
                "& input": {
                  fontSize: "1rem", // Consistent font size for input text
                },
              }}
            />


            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              sx={{ mb: 2 }}
              style={{ marginBottom: "20px" }}
            />

            {/* Button with Shiny Effect */}
            <Button
              variant="contained"
              fullWidth
              size="large"
              type="submit"
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
          </form>
        </CardContent>
      </Card>

      {/* Footer Section */}
      <Box textAlign="center" sx={{ color: "#555", fontSize: "0.9rem", pb: 3 }}>
        <Typography variant="body2" style={{ marginTop: "20px" }}>
          © 2024 Blood donation - Crafted with{" "}
          <span style={{ color: "red" }}>❤️</span> by Technical Hub.
        </Typography>
      </Box>
    </Box>
    </>
  );
};

export default LoginForm;
