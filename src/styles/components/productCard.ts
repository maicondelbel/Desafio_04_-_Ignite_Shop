import { styled } from '..'

export const ProductCardContainer = styled('article', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px',
  padding: '0.25rem',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  height: '520px',

  '.swiper-slide-active &': {
    div: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  '@md': {
    height: '656px',
  },
})

export const ProductCardLabelContainer = styled('div', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#00000099',
  padding: '1.25rem 2rem',
  cursor: 'default',
  textAlign: 'center',

  transform: 'translateY(110%)',
  opacity: '0',
  transition: 'all 0.2s ease-in-out',

  '@sm': {
    flexDirection: 'row',
    textAlign: 'left',
  },
})

export const AddToCartButton = styled('button', {
  padding: '0.75rem',
  background: '$green500',
  border: '0',
  borderRadius: '8px',
  color: '$white',
  lineHeight: '0',
  cursor: 'pointer',

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
    transition: '0.2s all',
  },

  '&:disabled': {
    opacity: '0.6',
    cursor: 'not-allowed',
  },
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
