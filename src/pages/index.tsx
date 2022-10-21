import { ProductCard } from '../components/ProductCard'
import { HomeContainer } from '../styles/pages/home'
import Image from 'next/image'
import { stripe } from './../lib/stripe'
import { GetStaticProps } from 'next'
import { Stripe } from 'stripe'
import Link from 'next/link'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'

interface IHomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    priceUnformatted: number
  }[]
}

export default function Home({ products }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={16}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <Link href={`/product/${product.id}`} prefetch={false}>
                  <a>
                    <ProductCard product={product}>
                      <Image
                        src={product.imageUrl}
                        height={520}
                        width={520}
                        alt=""
                      />
                    </ProductCard>
                  </a>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      priceUnformatted: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 Hours
  }
}
