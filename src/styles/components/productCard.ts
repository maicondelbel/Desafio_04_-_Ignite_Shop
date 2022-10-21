import { styled } from '..'

export const ProductCardContainer = styled('article', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  height: '656px',
  borderRadius: '8px',
  padding: '0.25rem',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',

  '.swiper-slide-active &': {
    div: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const ProductCardLabelContainer = styled('div', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#00000099',
  padding: '2rem',

  transform: 'translateY(110%)',
  opacity: '0',
  transition: 'all 0.2s ease-in-out',
})

export const AddToCartButton = styled('button', {
  padding: '0.75rem',
  background: '$green500',
  border: '0',
  borderRadius: '8px',
  color: '$white',
  lineHeight: '0',
  cursor: 'pointer',
})

export const ProductCardLabel = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$lg',
    color: '$gray100',
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },
})
