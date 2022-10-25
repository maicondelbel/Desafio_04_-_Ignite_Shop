import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from './../../lib/stripe'
import { Stripe } from 'stripe'

import {
  ProductContainer,
  ProductDetailContainer,
  ProductImageContainer,
} from '../../styles/pages/product'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Head from 'next/head'
import { CartContext, IProduct } from '../../contexts/cartContext'
import Loader from '../../components/Loader'

interface IProductProps {
  product: IProduct
}

export default function Product({ product }: IProductProps) {
  const { isFallback } = useRouter()

  const { itemAlreadyExistsInCart, addToCart } = useContext(CartContext)

  function handleAddToCart(product: IProduct) {
    addToCart(product)
  }

  if (isFallback) {
    return <Loader />
  }

  return (
    <>
      <Head>
        <title>Ignite Shop | {product.name}</title>
      </Head>

      <ProductContainer>
        <ProductImageContainer>
          <Image src={product.imageUrl} height={520} width={520} alt="" />
        </ProductImageContainer>
        <ProductDetailContainer>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button
            onClick={() => handleAddToCart(product)}
            disabled={itemAlreadyExistsInCart(product.id)}
          >
            {itemAlreadyExistsInCart(product.id)
              ? 'Produto adicionado'
              : 'Colocar na sacola'}
          </button>
        </ProductDetailContainer>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_Mdz3cyt1mYsRDs',
        },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        defaultPriceId: price.id,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        priceUnformatted: price.unit_amount / 100,
      },
      revalidate: 60 * 60 * 1, // 1 Hour,
    },
  }
}
