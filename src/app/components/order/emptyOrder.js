import { Box, Grid2, Typography } from '@mui/material';
import React from 'react'

const EmptyOrder = () => {
  return (
    <Grid2 size={{xs:12}} height={"100%"}>    
        <Box sx={{display:"flex", alignItems:'center',justifyContent:"center", height:"100%" }}>
            <Typography component={"p"} variant='h5' position="center" sx={{marginRight:1}}> Your don't have any</Typography>
            <Typography component={"p"} variant='h5' position="center" sx={{marginRight:1}} color='info'>orders</Typography>   
            <Typography component={"p"} variant='h5' position="center">yet</Typography>     
        </Box>  
    </Grid2>
  )
}

export default EmptyOrder;