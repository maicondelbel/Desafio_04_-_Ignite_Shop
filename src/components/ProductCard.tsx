import { forwardRef, HTMLAttributes, ReactNode, useContext } from 'react'
import { Handbag } from 'phosphor-react'
import {
  AddToCartButton,
  ProductCardContainer,
  ProductCardLabel,
  ProductCardLabelContainer,
} from '../styles/components/productCard'
import { CartContext, IProduct } from '../contexts/cartContext'

interface IProductCardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  product: IProduct
}

export const ProductCard = forwardRef<HTMLElement, IProductCardProps>(
  function ProductCard({ children, product, ...props }, ref) {
    const { addToCart, itemAlreadyExistsInCart } = useContext(CartContext)

    function handleAddToCart(product: IProduct) {
      addToCart(product)
    }

    return (
      <ProductCardContainer {...props} ref={ref}>
        {children}
        <ProductCardLabelContainer onClick={(event) => event.preventDefault()}>
          <ProductCardLabel>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </ProductCardLabel>
          <AddToCartButton
            onClick={() => {
              handleAddToCart(product)
            }}
            disabled={itemAlreadyExistsInCart(product.id)}
          >
            <Handbag size={32} />
          </AddToCartButton>
        </ProductCardLabelContainer>
      </ProductCardContainer>
    )
  },
)
