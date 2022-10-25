import {
  AsideBarContainer,
  CartAmount,
  CartItem,
  CartItemDetailsContainer,
  CartItemImageContainer,
  CartItensContainer,
  CartQuantity,
  CartResumeContainer,
  CheckoutButton,
  CloseButton,
  EmptyCartItem,
} from './../styles/components/sidebar'

import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { SidebarContext } from './../contexts/sidebarContext'
import { CartContext } from '../contexts/cartContext'
import Image from 'next/image'
import axios from 'axios'

export default function Sidebar() {
  const { isVisible, toggleSidebar } = useContext(SidebarContext)
  const {
    cart,
    cartTotalAmountFormatted,
    cartContentsCount,
    removeItemFromCart,
  } = useContext(CartContext)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  function handleRemoveCartItem(productId: string) {
    removeItemFromCart(productId)
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceIds: cart.map((item) => {
          return {
            price: item.defaultPriceId,
            quantity: 1,
          }
        }),
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (error) {
      console.log(error)
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <AsideBarContainer
      className={isVisible && 'visible'}
      onClick={(event) => event.stopPropagation()}
    >
      <CloseButton
        onClick={() => {
          toggleSidebar()
        }}
      >
        <X size={24} />
      </CloseButton>
      <h2>Sacola de compras</h2>
      <CartItensContainer>
        {cartContentsCount === 0 && (
          <EmptyCartItem>
            <span>A sacola está vazia!</span>
          </EmptyCartItem>
        )}

        {cart.map((cartItem) => {
          return (
            <CartItem key={cartItem.id}>
              <CartItemImageContainer>
                <Image
                  src={cartItem.imageUrl}
                  width={140}
                  height={140}
                  alt=""
                />
              </CartItemImageContainer>
              <CartItemDetailsContainer>
                <h3>{cartItem.name}</h3>
                <strong>{cartItem.price}</strong>
                <a onClick={() => handleRemoveCartItem(cartItem.id)}>Remover</a>
              </CartItemDetailsContainer>
            </CartItem>
          )
        })}
      </CartItensContainer>
      {cartContentsCount >= 1 && (
        <>
          <CartResumeContainer>
            <CartQuantity>
              <span>Quantidade</span>
              <span>
                {cartContentsCount} {cartContentsCount === 1 ? 'item' : 'itens'}
              </span>
            </CartQuantity>
            <CartAmount>
              <strong>Valor total</strong>
              <strong>{cartTotalAmountFormatted}</strong>
            </CartAmount>
          </CartResumeContainer>
          <CheckoutButton
            disabled={isCreatingCheckoutSession}
            onClick={() => {
              handleBuyProduct()
            }}
          >
            Finalizar compra
          </CheckoutButton>
        </>
      )}
    </AsideBarContainer>
  )
}
