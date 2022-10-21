import { forwardRef, HTMLAttributes, ReactNode, useContext } from 'react'
import { Handbag } from 'phosphor-react'
import {
  AddToCartButton,
  ProductCardContainer,
  ProductCardLabel,
  ProductCardLabelContainer,
} from '../styles/components/productCard'
import { CartContext } from '../contexts/cartContext'

interface IProductCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  product: { id: string; name: string; imageUrl: string; price: string }
}

export const ProductCard = forwardRef<HTMLElement, IProductCardProps>(
  function ProductCard({ children, product, ...props }, ref) {
    const { addToCart } = useContext(CartContext)

    function handleAddToCart(event, product) {
      event.preventDefault()
      addToCart(product)
    }

    return (
      <ProductCardContainer {...props} ref={ref}>
        {children}
        <ProductCardLabelContainer>
          <ProductCardLabel>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </ProductCardLabel>
          <AddToCartButton
            onClick={(event) => {
              handleAddToCart(event, product)
            }}
          >
            <Handbag size={32} />
          </AddToCartButton>
        </ProductCardLabelContainer>
      </ProductCardContainer>
    )
  },
)
