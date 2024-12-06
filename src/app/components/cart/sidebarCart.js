import { Grid2 } from "@mui/material";
import EmptyCart from "./emptyCart";
import MiniCardProduct from "./miniCardProduct";
import { useState } from "react";

const SidebarCart = () => {

  let items = JSON.parse(localStorage.getItem("cart"));
  const [itemsCart, setItemsCart] = useState(items)

const handleRemoveFromCart = (idIngredient)=>{

  const filteredItems = items.filter((item)=>item.idIngredient !== idIngredient);
  localStorage.setItem("cart",JSON.stringify(filteredItems));
  setItemsCart(filteredItems);
};
  if (!itemsCart) return <EmptyCart />;

  return (
    <Grid2 container spacing={2} sx={{ overflow: "hidden", p: 2, width: 350 }}>
      {itemsCart?.map((item) => (
        <Grid2 size={{xs:12}} sx={{height:85}} key={item.idIngredient}>
          <MiniCardProduct item={item} removeFromCart={handleRemoveFromCart}/>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default SidebarCart;

