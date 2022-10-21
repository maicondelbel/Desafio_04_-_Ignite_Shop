import {
  AsideBarContainer,
  CartAmount,
  CartItem,
  CartItemDetailsContainer,
  CartItemImageContainer,
  CartItensContainer,
  CartQuantity,
  CartResumeContainer,
  CloseButton,
} from './../styles/components/sidebar'

import { X } from 'phosphor-react'
import { useContext } from 'react'
import { SidebarContext } from './../contexts/sidebarContext'
import { CartContext } from '../contexts/cartContext'
import Image from 'next/image'

export default function Sidebar() {
  const { isVisible, toggleSidebar } = useContext(SidebarContext)
  const { cart, cartTotalAmount, cartContentsCount } = useContext(CartContext)

  const cartTotalAmountFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotalAmount)

  return (
    <AsideBarContainer className={isVisible && 'visible'}>
      <CloseButton
        onClick={() => {
          toggleSidebar()
        }}
      >
        <X size={24} />
      </CloseButton>
      <h2>Sacola de compras</h2>
      <CartItensContainer>
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
                <a>Remover</a>
              </CartItemDetailsContainer>
            </CartItem>
          )
        })}
      </CartItensContainer>
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
      <button>Finalizar compra</button>
    </AsideBarContainer>
  )
}
