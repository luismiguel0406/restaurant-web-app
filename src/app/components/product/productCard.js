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
import { useEffect, useState } from "react";
import { getLocalStorageCart } from "@/app/helpers";

const ProductCard = ({ product }) => {
  let timeout;
  let cart = getLocalStorageCart();
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
      let oldItems = getLocalStorageCart() || [];

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

  useEffect(()=>{
    if (!isInCart) return;
    let currentCart = getLocalStorageCart();
    let foundItem = currentCart.find((item)=> item.idIngredient === product?.idIngredient );
    setCounter(foundItem.quantity)
  },[])

  useEffect(()=>{
     // To add or minus quantity
     if (!isInCart) return;
      
     clearTimeout(timeout);
       timeout = setTimeout(()=>{
          let currentCart = getLocalStorageCart();
          let itemToUpdate = currentCart.find((item)=> item.idIngredient === product?.idIngredient );
          itemToUpdate.quantity = counter;
          itemToUpdate.total = counter * itemToUpdate.price
          // "itemToUpdate" reference to  "currentCart" because of currentcart variable already got the new "quantity" value
          let items = JSON.stringify([...currentCart]);
          localStorage.setItem("cart", items); 
     },600)

  },[counter])

  return (
    <Card>
      <CardMedia
        title="product"
        image={product.imageUrl}
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
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
            <Typography variant="h6">{counter}</Typography>
            <IconButton onClick={() => handleAddItem()}>
              <AddIcon />
            </IconButton>
          </>
           
        ) : (
          <Button 
          onClick={()=>handleItemInCart()}
          variant="contained" 
          startIcon={<ShoppingCartIcon />}>Add item</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
