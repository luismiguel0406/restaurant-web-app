"use client";

import React, { useState } from "react";
import {
  Drawer,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsList from "./components/ProductsList";


const queryClient = new QueryClient();

const page = () => {

  const [open, setOpen] = useState(false);
  
  const toggleDrawer = (state = false) => {
    setOpen(state);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ minWidth: 300, p: 2 }}>Soy el contenido</Box>
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <Stack
            direction="row"
            sx={{
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => setOpen(!open)}>
              <ShoppingCartIcon sx={{ color: "white" }} fontSize="large" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2 }}>
        <ProductsList />
      </Box>
    </QueryClientProvider>
  );
};

export default page;
