import { getAllproducts } from '@/services/product.service'
import React from 'react'

export default async function page() {
  
    const allproductsResponse= await getAllproducts()
  return <>
{allproductsResponse.data.map((product) => (<li key={product.id}>{product.title}</li>))}
  </>
}
