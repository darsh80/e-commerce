export interface GetCartResponse {
  status: string
  numOfCartItems: number
  cartId: string
  data: GetCartData
}

export interface GetCartData {
  _id: string
  cartOwner: string
  products: GetCartProduct[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}

export interface GetCartProduct {
  count: number
  _id: string
  product: ItemCart
  price: number
}

export interface ItemCart {
  subcategory: Subcategory[]
  _id: string
  title: string
  quantity: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  id: string
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}
