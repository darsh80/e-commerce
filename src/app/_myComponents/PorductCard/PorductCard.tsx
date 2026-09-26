import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/interfaces/products.interface";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "@/components/FavoriteButton";
import StarsRating from "@/components/StarsRating";
import EyeButton from "@/components/EyeButton";
import RefreshCwButton from "@/components/RefreshCwButton";
import AddProductToCartBtn from "./addproductCartBtn/AddproductCartBtn";



export function ProductCard({ Product }: { Product: Product }) {
  return (
    <Card
      className="mt-5 bg-white border border-gray-200 rounded-lg shadow-md shadow-gray-300
transition-all duration-500 ease-out 
hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] 
relative  mx-auto w-full max-w-sm flex flex-col h-full"
    >
  <div className="relative w-full h-44 group">

  <Image
    className="w-full h-full object-contain bg-white"
    src={Product.imageCover}
    alt={Product.title}
    fill={true}
  />

  <div className="absolute top-0 right-0 p-2 hover:cursor-pointer">
   <FavoriteButton productId={Product._id} />
  </div>
  <div className="absolute top-10 right-0 p-2 hover:cursor-pointer ">
   <RefreshCwButton />
  </div>
  <Link href={`/${Product._id}`} className="absolute top-20 right-0 p-2 hover:cursor-pointer">
   <EyeButton/>
  </Link>


    {Product.priceAfterDiscount &&
    Product.priceAfterDiscount < Product.price && (
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold p-1  rounded-md shadow-md">
       -{Math.round(((Product.price - Product.priceAfterDiscount || 0) / Product.price) * 100)}%
      </div>
    )}

</div>

      <CardHeader className="flex-1 p-3">
        <Badge className="bg-green-100 text-green-700">{Product.category.name}</Badge>
        <Link href={`/${Product._id}`}>
          <CardTitle className="line-clamp-2">{Product.title}</CardTitle>
        </Link>
       <StarsRating
  rating={Product.ratingsAverage}
  count={Product.ratingsQuantity}
/>


  <div className="flex items-center justify-between">

  <div className="flex items-center">
    <span className="text-green-600 font-bold mr-1 text-lg">
      {Product.priceAfterDiscount
        ? Product.priceAfterDiscount
        : Product.price}
      EGP
    </span>

    {Product.priceAfterDiscount && (
      <span className="text-gray-400 line-through text-sm">
        {Product.price} EGP
      </span>
    )}
  </div>
<AddProductToCartBtn  productId={Product._id}/>

</div>
      </CardHeader>
    </Card>
  );
}
