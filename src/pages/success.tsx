import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from './../lib/stripe'

import {
  SuccessContainer,
  SuccessImageContainer,
} from './../styles/pages/success'

interface ISuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Success({ customerName, product }: ISuccessProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop | Compra Efetuada!</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra Efetuada!</h1>
        <SuccessImageContainer>
          <Image src={product.imageUrl} alt="" width={140} height={140} />
        </SuccessImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua
          <strong> {product.name}</strong> já está a caminho da sua casa.
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
    const product = response.line_items.data[0].price.product as Stripe.Product

    return {
      props: {
        customerName,
        product: {
          name: product.name,
          imageUrl: product.images[0],
        },
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
