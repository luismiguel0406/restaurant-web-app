import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const PaymentSummary = ({ items }) => {
  const deliveryFee = 150;
  const payment = items?.reduce(
    (accumulator, currentValue) => {
      return {
        price: accumulator.total + currentValue.total,
        delivery: deliveryFee,
        total: accumulator.total + currentValue.total + deliveryFee,
      };
    },
    { price: 0, delivery: 0, total: 0 }
  );
  return (
    <Box>
      <Typography color="info" sx={{ mb: 1 }}>
        Payment summary
      </Typography>

      <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
        <Typography align="left">Price:</Typography>
        <Typography align="right">${payment?.price || 0.0}</Typography>
      </Box>
      <Box display={"flex"} sx={{ justifyContent: "space-between", mb: 1 }}>
        <Typography align="left">Delivery:</Typography>
        <Typography align="right">${payment?.delivery || 0.0}</Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
        <Typography align="left">Total:</Typography>
        <Typography align="right" color="info">
          ${payment?.total || 0.0}
        </Typography>
      </Box>
    </Box>
  );
};

export default PaymentSummary;
