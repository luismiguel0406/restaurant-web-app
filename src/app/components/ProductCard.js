"use client"
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from "react";

const ProductCard = ({product}) => {

const [counter, setCounter] = useState(0);

const handleRemoveFromCart=()=>{
  if(counter===0) return;
  setCounter((prevState)=> prevState - 1);
}

 const handleAddToCart=()=>{
  if(counter===10) return;
    setCounter((prevState)=>prevState + 1);
 }
  /*  let item = {
    product: product.strIngredient,
    price: product.price,
    quantity:1
   }
  let localCart = localStorage.setItem */

  
  return (
    <Card /*sx={{maxWidth : 300}}*/>
      <CardMedia 
      title ='product'
      image={product.imageUrl}
      sx={{height:140}}
      />
      <CardContent>
        <Typography variant="h5" component="div">
         {product.strIngredient}
        </Typography>
        <Typography variant="h5">$ {product.price}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={()=>handleAddToCart()} >
          <AddIcon/>
        </IconButton>
        <Typography variant="h5">
          {counter}
        </Typography>
        <IconButton onClick={()=>handleRemoveFromCart()} >
          <RemoveIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
