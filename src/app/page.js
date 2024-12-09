"use client";
import React, { Suspense, useEffect, useState } from "react";
import {
  Drawer,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Grid2,
  Paper,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsList from "./components/product/productsList";
import SidebarCart from "./components/cart/sidebarCart";
import { socket } from "./socket";
import { ToastContainer } from "react-toastify";
import OrderStatus from "./components/order/orderStatus";

const queryClient = new QueryClient();

const page = () => {

  const [open, setOpen] = useState(false);
  const [newOrderStatus, setNewOrderStatus] = useState();
  const [sockeLabel, setSocketLabel] = useState("Disconnect socket");
  const [clientId, setClientId] = useState();


  useEffect(() => {
    if (socket.connected) {
      console.log(`connected: ${socket.id}`);
    }

    /*Socket registration and listen status order */
    socket.on("connect", () => {
      socket.emit("register", clientId);
    });

    socket.on("register_successfully", (generatedClientId) => {
      localStorage.setItem("clientId", generatedClientId);
      setClientId(generatedClientId);
    });

    socket.on("status-order", (args) => {
      setNewOrderStatus(args);
    });
    /*************************************************** */
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(()=>{
    let client_id = localStorage.getItem("clientId") || "";
      setClientId(client_id);
  },[]);

  const closeDrawer = () => {
    setOpen(false);
  };


  const handleToggleSocketConnection = () => {
    if (socket.connected) {
      socket.disconnect();
      setSocketLabel("Connect socket");
    } else if (socket.disconnected) {
      socket.connect();
      setSocketLabel("Disconnect socket");
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <Drawer anchor="right" open={open} onClose={() => closeDrawer()}>
          <SidebarCart closeDrawer={closeDrawer} clientId={clientId} socketId={socket?.id} />
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
              <Button
                sx={{ ml: 5 }}
                variant="outlined"
                color="white"
                onClick={() => handleToggleSocketConnection()}
                startIcon={<OnlinePredictionIcon />}
              >
                {sockeLabel}
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>

        <Grid2 container spacing={3} sx={{ p: 2, mt: 1, height: 100 }}>
          <OrderStatus order={newOrderStatus} />
        </Grid2>

        <Suspense fallback={<h1>Loading...</h1>}>
          <Paper sx={{ p: 2, maxHeight: "100vh", overflow: "auto" }}>
            <ProductsList />
          </Paper>
        </Suspense>
        <ToastContainer />
      </Box>
    </QueryClientProvider>
  );
};

export default page;
