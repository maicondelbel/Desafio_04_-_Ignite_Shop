import { Handbag } from 'phosphor-react'
import { HTMLAttributes } from 'react'
import {
  CartIconBadgeContainer,
  CartIconContainer,
} from '../styles/components/cartIcon'

interface ICartIconProps extends HTMLAttributes<HTMLElement> {
  quantity: number
}

export default function CartIcon({ quantity, ...props }: ICartIconProps) {
  return (
    <CartIconContainer {...props}>
      <Handbag size={25} weight="bold" />
      {quantity > 0 && (
        <CartIconBadgeContainer>{quantity}</CartIconBadgeContainer>
      )}
    </CartIconContainer>
  )
}
