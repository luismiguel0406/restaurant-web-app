"use client";
import {
  Drawer,
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductCard from "./components/ProductCard";

import React, { useState } from "react";

const page = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state = false) => {
    setOpen(state);
  };
  return (
    <>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ minWidth: 300, p: 2 }}>Soy el contenido</Box>
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <Stack
          direction="row"
          sx={{
             justifyContent:"flex-end",
             alignItems:"center"
          }} >
          <IconButton onClick={() => setOpen(!open)}>
            <ShoppingCartIcon sx={{color:"white"}} fontSize="large"/>
          </IconButton>
          </Stack>
      
        </Toolbar>
      </AppBar>
      <Container sx={{p:2}} maxWidth={false}>Soy el contenido de la pagina</Container>
    </>
  );
};

export default page;
