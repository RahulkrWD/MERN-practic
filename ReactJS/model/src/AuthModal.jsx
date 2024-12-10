// AuthModal.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";

const AuthModal = ({ open, handleClose }) => {
  const [view, setView] = useState("login");

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>{view === "login" ? "Login" : view === "signup" ? "Sign Up" : "Forgot Password"}</DialogTitle>
      <DialogContent>
        {view === "login" && (
          <Box>
            <TextField label="Email" type="email" fullWidth margin="normal" />
            <TextField label="Password" type="password" fullWidth margin="normal" />
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography
                variant="body2"
                color="primary"
                style={{ cursor: "pointer" }}
                onClick={() => setView("forgotPassword")}
              >
                Forgot Password?
              </Typography>
              <Typography
                variant="body2"
                color="primary"
                style={{ cursor: "pointer" }}
                onClick={() => setView("signup")}
              >
                Sign Up
              </Typography>
            </Box>
          </Box>
        )}
        {view === "signup" && (
          <Box>
            <TextField label="Name" type="text" fullWidth margin="normal" />
            <TextField label="Email" type="email" fullWidth margin="normal" />
            <TextField label="Password" type="password" fullWidth margin="normal" />
            <Typography
              variant="body2"
              color="primary"
              style={{ cursor: "pointer" }}
              onClick={() => setView("login")}
            >
              Already have an account? Log In
            </Typography>
          </Box>
        )}
        {view === "forgotPassword" && (
          <Box>
            <TextField label="Email" type="email" fullWidth margin="normal" />
            <Typography
              variant="body2"
              color="primary"
              style={{ cursor: "pointer" }}
              onClick={() => handleSwitchView("login")}
            >
              Back to Login
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Close</Button>
        {view !== "forgotPassword" && (
          <Button color="primary" variant="contained">
            {view === "login" ? "Login" : "Sign Up"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default AuthModal;
