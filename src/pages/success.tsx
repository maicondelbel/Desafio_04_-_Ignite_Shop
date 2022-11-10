import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import Stripe from 'stripe'
import { CartContext } from '../contexts/cartContext'
import { stripe } from './../lib/stripe'

import {
  SuccessContainer,
  SuccessImageContainer,
  SuccessImagesContainer,
} from './../styles/pages/success'

interface ISuccessProps {
  customerName: string
  productsImage: string[]
  success: boolean
}

export default function Success({
  customerName,
  productsImage,
  success,
}: ISuccessProps) {
  const { clearCart } = useContext(CartContext)

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <>
      <Head>
        <title>Ignite | Ignite Shop - Compra Efetuada!</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <SuccessImagesContainer>
          {productsImage.map((productImage, index) => {
            return (
              <SuccessImageContainer key={index}>
                <Image src={productImage} alt="" width={140} height={140} />
              </SuccessImageContainer>
            )
          })}
        </SuccessImagesContainer>
        <h1>Compra Efetuada!</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de
          <strong> {productsImage.length}</strong>
          {productsImage.length > 1 ? ' camisetas' : ' camiseta'} já está a
          caminho da sua casa.
        </p>
        <Link href={'/'}>Voltar para catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  try {
    const response = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product'],
    })

    const customerName = response.customer_details.name
    const productsImage = response.line_items.data.map((item) => {
      const product = item.price.product as Stripe.Product
      return product.images[0]
    })

    return {
      props: {
        customerName,
        productsImage,
        success: true,
      },
    }
  } catch (error) {
    console.log(error)

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}
