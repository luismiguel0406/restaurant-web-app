import { Card, Grid2, CardMedia, CardContent, Typography, IconButton, CardActions } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EmptyCart from "./emptyCart";
import MiniCardProduct from "./miniCardProduct";

const SidebarCart = () => {
  let items = JSON.parse(localStorage.getItem("cart"));

const handleRemoveFromCart = (idIngredient)=>{

  const filteredItems = items.filter((item)=>item.idIngredient !== idIngredient);
  localStorage.setItem("cart",JSON.stringify(filteredItems));
};
  if (!items) return <EmptyCart />;

  return (
    <Grid2 container spacing={2} sx={{ overflow: "hidden", p: 2, width: 350 }}>
      {items?.map((item) => (
        <Grid2 size={{xs:12}} sx={{height:85}} key={item.idIngredient}>
          <MiniCardProduct item={item} removeFromCart={handleRemoveFromCart}/>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default SidebarCart;

