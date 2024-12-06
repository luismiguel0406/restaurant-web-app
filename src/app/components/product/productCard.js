"use client";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

const ProductCard = ({ product }) => {

  let cart = JSON.parse(localStorage.getItem("cart"));
  const isInCart = cart?.some(
    (item) => item.idIngredient === product?.idIngredient
  );

  const [counter, setCounter] = useState(1);
  const [isInCartState, setIsInCartState] = useState(isInCart);

  const handleRemoveItem = () => {
    if (counter === 0) return;
    setCounter((prevState) => prevState - 1);
  };

  const handleAddItem = () => {
    if (counter === 10) return;
    setCounter((prevState) => prevState + 1);
  };

  const handleItemInCart = ()=>{
      let oldItems = JSON.parse(localStorage.getItem("cart")) || [];

      let items = JSON.stringify([...oldItems, {
        idIngredient: product?.idIngredient,
        strIngredient: product?.strIngredient,
        price: product?.price,
        quantity: counter,
        total: counter * product?.price,
        imageUrlSmall:product?.imageUrlSmall
       }]);
  
       localStorage.setItem("cart", items); 
       setIsInCartState(true);
  };

  return (
    <Card>
      <CardMedia
        title="product"
        image={product.imageUrl}
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.strIngredient}
        </Typography>
        <Typography variant="h6">$ {product.price}</Typography>
      </CardContent>
      <CardActions>
        {isInCartState ? (       
          <>
            <IconButton onClick={() => handleRemoveItem()}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="h5">{counter}</Typography>
            <IconButton onClick={() => handleAddItem()}>
              <AddIcon />
            </IconButton>
          </>
           
        ) : (
          <Button 
          onClick={()=>handleItemInCart()}
          variant="contained" 
          startIcon={<ShoppingCartIcon />}>Add cart</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
