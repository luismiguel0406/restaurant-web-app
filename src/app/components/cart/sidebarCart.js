import { Box, Button, Divider, Grid2, Typography } from "@mui/material";
import EmptyCart from "./emptyCart";
import MiniCardProduct from "./miniCardProduct";
import { useState } from "react";
import PaymentSummary from "./paymentSummary";

const SidebarCart = () => {
  let items = JSON.parse(localStorage.getItem("cart"));
  const [itemsCart, setItemsCart] = useState(items);

  const handleRemoveFromCart = (idIngredient) => {
    const filteredItems = items.filter(
      (item) => item.idIngredient !== idIngredient
    );
    localStorage.setItem("cart", JSON.stringify(filteredItems));
    setItemsCart(filteredItems);
  };

  if (!itemsCart) return <EmptyCart />;

  return (
    <Box width={350} height={"100vh"}>
      <Grid2
        container
        spacing={2}
        sx={{ overflow: "auto", p: 2, width: "100%", height: "75%" }}
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
      <Box width={"100%"} sx={{ p: 2, height: "25%" }}>
        <PaymentSummary items={items} />
      </Box>
    </Box>
  );
};

export default SidebarCart;
