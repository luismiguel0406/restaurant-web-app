import React from 'react'
import ProductCard from './productCard'
import { useGetData } from '../../hooks/useGetData'
import { Grid2 } from '@mui/material'

const ProductsList = ({}) => {

 const { data } = useGetData('products');
  return (
    <Grid2 container spacing={3} sx={{overflow:"hidden"}}>
      {data?.map(item=>(
        <Grid2 size={{xs:6, sm:4, md:3, lg:3, xl:2}} key={item.idIngredient}>
          <ProductCard product={item}/>
        </Grid2>
      ))}
    </Grid2>
  )
}

export default ProductsList;