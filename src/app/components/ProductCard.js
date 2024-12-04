import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const ProductCard = ({product}) => {

  
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
        <Button size="small">+</Button>
        <Button size="small">-</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
