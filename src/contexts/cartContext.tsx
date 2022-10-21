import { createContext, ReactNode, useState } from 'react'

interface IProduct {
  id: string
  name: string
  imageUrl: string
  defaultPriceId: string
  price: string
  priceUnformatted: number
  description: string
}

interface ICartContextType {
  cart: IProduct[]
  cartContentsCount: number
  cartTotalAmount: number
  addToCart: (product: IProduct) => void
}

interface ICartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as ICartContextType)

export function CartProvider({ children }: ICartContextProps) {
  const [cart, setCart] = useState<IProduct[]>([])

  function addToCart(product: IProduct) {
    setCart((state) => [...state, product])
    console.log(cart)
  }

  const cartContentsCount = cart.length

  const cartTotalAmount = cart.reduce((total, priceItem) => {
    return (total += priceItem.priceUnformatted)
  }, 0)

  return (
    <CartContext.Provider
      value={{ cart, cartContentsCount, cartTotalAmount, addToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
