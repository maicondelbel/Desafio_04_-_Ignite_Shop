import { createContext, ReactNode, useEffect, useState } from 'react'

export interface IProduct {
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
  cartTotalAmountFormatted: string
  addToCart: (product: IProduct) => void
  removeItemFromCart: (productId: string) => void
  itemAlreadyExistsInCart: (productId: string) => boolean
}

interface ICartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as ICartContextType)

export function CartProvider({ children }: ICartContextProps) {
  const initialCart = []
  const [cart, setCart] = useState<IProduct[]>(initialCart)

  useEffect(() => {
    const storedStateAsJSON = JSON.parse(
      localStorage.getItem('@ignite-shop:cart-1.0.0'),
    )
    if (storedStateAsJSON) {
      setCart(storedStateAsJSON)
    }
  }, [])

  useEffect(() => {
    console.log(cart)
    if (cart !== initialCart) {
      const stateJSON = JSON.stringify(cart)
      localStorage.setItem('@ignite-shop:cart-1.0.0', stateJSON)
    }
  }, [cart])

  function addToCart(product: IProduct) {
    setCart((state) => [...state, product])
  }

  const cartContentsCount = cart.length

  const cartTotalAmount = cart.reduce((total, priceItem) => {
    return (total += priceItem.priceUnformatted)
  }, 0)

  const cartTotalAmountFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotalAmount)

  function removeItemFromCart(productId: string) {
    setCart((state) => {
      return state.filter((cartItem) => {
        return cartItem.id !== productId
      })
    })
  }

  function itemAlreadyExistsInCart(productId: string) {
    return cart.some((product) => product.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartContentsCount,
        cartTotalAmountFormatted,
        addToCart,
        removeItemFromCart,
        itemAlreadyExistsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
