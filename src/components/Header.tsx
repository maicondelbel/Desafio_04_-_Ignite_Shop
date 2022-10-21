import Logo from '../assets/logo.svg'
import Image from 'next/image'
import { HeaderContainer } from '../styles/components/header'
import Link from 'next/link'
import CartIcon from './CartIcon'
import { useContext } from 'react'
import { SidebarContext } from '../contexts/sidebarContext'
import { CartContext } from '../contexts/cartContext'

export default function Header() {
  const { toggleSidebar } = useContext(SidebarContext)
  const { cartContentsCount } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link href={'/'}>
        <a>
          <Image src={Logo} alt="" />
        </a>
      </Link>
      <CartIcon quantity={cartContentsCount} onClick={() => toggleSidebar()} />
    </HeaderContainer>
  )
}
