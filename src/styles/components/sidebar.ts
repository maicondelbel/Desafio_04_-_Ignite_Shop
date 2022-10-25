import { styled } from '..'

export const AsideBarContainer = styled('aside', {
  position: 'fixed',
  backgroundColor: '$gray800',
  right: '0',
  padding: '3rem',
  height: '100vh',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  zIndex: '100',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minWidth: '95vw',

  transform: 'translateX(110%)',
  opacity: '0',
  transition: 'all 0.2s ease-in-out',

  '&.visible': {
    transform: 'translateX(0%)',
    opacity: 1,
  },

  h2: {
    marginBottom: '2rem',
    fontSize: '$lg',
    color: '$gray100',
  },

  '@md': {
    minWidth: '30rem',
  },
})

export const CartItensContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  flex: '1',
  gap: '1.5rem',
})

export const EmptyCartItem = styled('div', {
  display: 'flex',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',

  span: {
    color: '$gray300',
  },
})

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
})

export const CartItemImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '5.875rem',
  width: '5.875rem',
  borderRadius: '8px',
})

export const CartItemDetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',

  h3: {
    fontWeight: 'normal',
    fontSize: '$md',
    color: '$gray300',
  },
  strong: {
    fontSize: '$md',
    color: '$gray100',
  },

  a: {
    marginTop: '0.5rem',
    color: '$green500',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
      transition: '0.2s all',
    },
  },
})

export const CartResumeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem 0 3rem',
  gap: '0.25rem',
})

export const CartQuantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    display: 'block',
  },
})

export const CartAmount = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  strong: {
    display: 'block',
    fontSize: '$xl',
  },
})

export const CloseButton = styled('span', {
  cursor: 'pointer',
  position: 'absolute',
  padding: '1.5rem',
  top: '0',
  right: '0',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const CheckoutButton = styled('button', {
  padding: '1.25rem 2.5rem',
  background: '$green500',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '$md',
  color: '$white',
  cursor: 'pointer',
  border: '0',

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
    transition: '0.2s all',
  },

  '&:disabled': {
    opacity: '0.6',
    cursor: 'not-allowed',
  },
})
