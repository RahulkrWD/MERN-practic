// Navbar.js
import React, { useState } from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => handleOpen()}>
            Login / Signup
          </Button>
        </Toolbar>
      </AppBar>
      <AuthModal open={open} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
