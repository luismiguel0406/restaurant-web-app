import { Box, Typography } from '@mui/material';
import React from 'react'

const EmptyProductList = () => {
  return (  
        <Box sx={{display:"flex", alignItems:'center',justifyContent:"center", height:"100%" }}>
            <Typography component={"p"} variant='h5' position="center" sx={{marginRight:1}}>There aren't</Typography>
            <Typography component={"p"} variant='h5' position="center" sx={{marginRight:1}} color='info'>products</Typography>   
            <Typography component={"p"} variant='h5' position="center">to show</Typography>     
        </Box>  
  )
}

export default EmptyProductList;