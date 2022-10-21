import { AppProps } from 'next/app'
import { globalStyles } from './../styles/global'

import { Container } from './../styles/pages/app'
import Header from '../components/Header'
import { SidebarProvider } from '../contexts/sidebarContext'
import Sidebar from './../components/Sidebar'
import { CartProvider } from '../contexts/cartContext'

globalStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <SidebarProvider>
          <Header />
          <Sidebar />
          <Component {...pageProps} />
        </SidebarProvider>
      </CartProvider>
    </Container>
  )
}
