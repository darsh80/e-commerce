
"use client"

import { GetCartProduct} from '@/interfaces/getCartResponse'
import React from 'react'
import CartItem from '../CartItem/CartItem'

export default function CartWrapper({ products }:{ products:GetCartProduct[] }) {
    // const {_id , price , count , product:{ imageCover ,title }} = products
  return <div className=' '>
  {products && products.map((product: GetCartProduct)=> <CartItem key={product._id} item={product} />)}
</div>
} 

