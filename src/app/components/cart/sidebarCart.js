"use client";
import { Box, Button, Grid2, Typography } from "@mui/material";
import EmptyCart from "./emptyCart";
import MiniCardProduct from "./miniCardProduct";
import { useEffect, useState } from "react";
import PaymentSummary from "./paymentSummary";
import { usePostMutation } from "@/app/hooks/usePostData";
import { getLocalStorageCart } from "@/app/helpers";

const SidebarCart = ({ closeDrawer, clientId, socketId }) => {
  let items = getLocalStorageCart();

  const [itemsCart, setItemsCart] = useState(items);
  const mutation = usePostMutation("order");

  let order = {
    clientId,
    socketId,
    orderItems: itemsCart,
  };

  const handlePlaceOrder = () => {
    mutation.mutate(order);
  };
  
  const handleRemoveFromCart = (idIngredient) => {
    const filteredItems = itemsCart?.filter(
      (item) => item.idIngredient !== idIngredient
    );
    localStorage.setItem("cart", JSON.stringify(filteredItems));
    setItemsCart(filteredItems);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      localStorage.setItem("order", JSON.stringify(order));
      localStorage.removeItem("cart");
      closeDrawer();
    }
  }, [mutation]);

  if (itemsCart?.length === 0 || itemsCart === null) return <EmptyCart />;

  return (
    <Box width={350} height={"100vh"}>
      <Box sx={{height: "75%", width:"100%"}}>
      <Grid2
        container
        spacing={2}
        sx={{ overflow: "auto", p: 2, width: "100%", maxHeight:"100%" }}
      >
        {itemsCart?.map((item) => (
          <Grid2 size={{ xs: 12 }} sx={{ height: 85 }} key={item.idIngredient}>
            <MiniCardProduct
              item={item}
              removeFromCart={handleRemoveFromCart}
            />
          </Grid2>
        ))}
      </Grid2>
      </Box>
      <Box width={"100%"} sx={{ p: 2, height: "25%" }}>
        <PaymentSummary items={items} />
        <Button
          color="info"
          sx={{ width: "100%", mt: 3 }}
          onClick={handlePlaceOrder}
          variant="contained"
        >
          <Typography>Place order</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default SidebarCart;
