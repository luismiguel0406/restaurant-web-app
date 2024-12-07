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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsList from "./components/product/productsList";
import SidebarCart from "./components/cart/sidebarCart";
import { socket } from "./socket";
import { ToastContainer } from 'react-toastify';
import OrderStatus from "./components/order/orderStatus";


const queryClient = new QueryClient();

const page = () => {
  const [open, setOpen] = useState(false);
  const [newOrderStatus, setNewOrderStatus]= useState()

  useEffect(()=>{
   if(socket.connected){
       console.log(`connected: ${socket.id}`);
   }
   return ()=>{
    socket.disconnect();
   }
  },[]);

  const toggleDrawer = (state = false) => {
    setOpen(state);
  };

  socket.on("status-order",(args)=>{
    setNewOrderStatus(args);
  })
  /*const handleNewOrderPlaced = (order)=>{
    setNewOrder(order);
  };*/

  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
          <SidebarCart toggleDrawer={toggleDrawer}/>
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

        <Grid2 container spacing={3} sx={{ p: 2, mt:1, height:100 }}>
          <OrderStatus order={newOrderStatus}/>
        </Grid2>

        <Suspense fallback={<h1>Loading...</h1>}>
          <Paper  sx={{ p: 2, maxHeight: "100vh", overflow: "auto" }}>
            <ProductsList />
          </Paper>
        </Suspense>
        <ToastContainer/>
      </Box>
    </QueryClientProvider>
  );
};

export default page;
