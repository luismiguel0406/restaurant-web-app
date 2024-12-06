import { Box, Typography } from '@mui/material'
import React from 'react'

const EmptyCart = () => {
  return (
    <Box sx={{height:"100%",width:300, p:2, alignItems:'center', justifyContent:"center", display:"flex"}}>      
        <Typography component={"p"} variant='h5' position="center"sx={{marginRight:1}}> Your cart is</Typography>
        <Typography component={"p"} variant='h5' position="center" color='info'>Empty</Typography>       
    </Box>
  )
}

export default EmptyCart;