import React from 'react'
import ProductCard from './ProductCard'
import { useGetData } from '../hooks/useGetData'
import { Grid2 } from '@mui/material'

const ProductsList = ({}) => {

 const { data } = useGetData('products');
  return (
    <Grid2 container spacing={3} sx={{overflow:"hidden"}}>
      {data?.map(item=>(
        <Grid2 size={{sm:2}} key={item.idIngredient}>
          <ProductCard product={item}/>
        </Grid2>
      ))}
    </Grid2>
  )
}

export default ProductsList