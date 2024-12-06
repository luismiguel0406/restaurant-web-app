import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MiniCardProduct = ({item, removeFromCart}) => {
  return (
    <Card sx={{ display: "flex", height: "100%" }}>
      <CardMedia
        image={item.imageUrlSmall}
        title="product"
        sx={{ width: "30%" }}
      />
      <CardContent sx={{ width: "50%", p: 1 }}>
        <Typography>{item.strIngredient}</Typography>
        <Typography>
          ({item.price}) x {item.quantity}{" "}
        </Typography>
      </CardContent>
      <CardActions sx={{ width: "20%" }}>
        <IconButton onClick={()=>removeFromCart(item.idIngredient)}>
          <DeleteIcon color="error" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MiniCardProduct;
