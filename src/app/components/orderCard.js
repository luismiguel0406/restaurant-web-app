import {
    Card,
    CardContent,
    Typography,
  } from "@mui/material";

  
  const OrderCard = ({order}) => {
  
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div" align="left">
           #{Math.round((Math.random() * 100000), 2)}
          </Typography>
          <Typography variant="h5" component="div" align="right">
           items qty
          </Typography>
          <Typography variant="h5">{order?.status}</Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default OrderCard;
  