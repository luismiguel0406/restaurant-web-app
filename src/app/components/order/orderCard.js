import { Box, Typography } from "@mui/material";

const OrderCard = ({ order }) => {
  return (
    <Box
      sx={{
        height: "100%"
      }}
    >
      <Typography component={"p"} variant="h6" position="center" sx={{ mr: 1 }}>
        Order: {order?.orderId}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography component={"p"} variant="h6" sx={{ mr: 1 }}>
          Status:
        </Typography>
        <Typography
          component={"p"}
          variant="h6"
          position="center"
          color={order?.status?.color}
        >
          {order?.status?.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderCard;
