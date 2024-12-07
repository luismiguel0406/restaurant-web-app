import React from 'react'
import EmptyOrder from './emptyOrder';
import { Grid2 } from '@mui/material';
import OrderCard from './orderCard';

const OrderStatus = ({order}) => {

if(!order) return <EmptyOrder/>

  return (
    <Grid2 size={{xs:12, sm:4}} sx={{p:1, height:"80%"}}>
      <OrderCard order={order}/>
    </Grid2>
  )
}

export default OrderStatus;