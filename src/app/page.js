"use client";

import React, { Suspense, useState } from "react";
import {
  Drawer,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Grid2,
  Paper,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsList from "./components/ProductsList";
import OrderCard from "./components/orderCard";

const queryClient = new QueryClient();

const page = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state = false) => {
    setOpen(state);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Box>
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

        <Grid2 container spacing={3} sx={{ p: 2 }}>
          <Grid2 size={{ sm: 4 }}>
            <OrderCard />
          </Grid2>
          <Grid2 size={{ sm: 4 }}>
            <OrderCard />
          </Grid2>
          <Grid2 size={{ sm: 4 }}>
            <OrderCard />
          </Grid2>
        </Grid2>

        <Suspense fallback={<h1>Cargando...</h1>}>
          <Paper  sx={{ p: 2, maxHeight: "100vh", overflow: "auto" }}>
            <ProductsList />
          </Paper>
        </Suspense>
      </Box>
    </QueryClientProvider>
  );
};

export default page;
