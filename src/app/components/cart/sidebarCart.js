import { Card, Grid2, CardMedia, CardContent } from "@mui/material";
import EmptyCart from "./emptyCart";

const SidebarCart = () => {
  let items = JSON.parse(localStorage.getItem("cart"));

  if (!items) return <EmptyCart />;

  return (
    <Grid2 container spacing={2} sx={{ overflow: "hidden", p: 2, width: 300 }}>
      {items?.map((item) => (
        <Grid2 size={{xs:12}} key={item.idIngredient}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              image={item.imageUrlSmall}
              title="product"
              sx={{ width: 100 }}
            />
            <CardContent>
              {item.strIngredient}
              {item.price} x {item.quantity}
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default SidebarCart;

