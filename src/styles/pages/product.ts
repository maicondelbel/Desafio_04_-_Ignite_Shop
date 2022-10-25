import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1220px',
  margin: '0 auto',
  minHeight: '656px',
  flexWrap: 'wrap',
  padding: '0 1.25rem',
})

export const ProductImageContainer = styled('div', {
  flex: '1 1 50%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px',
  padding: '0.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
})

export const ProductDetailContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'stretch',
  padding: '1.5rem 0',

  h1: {
    fontSize: '$xl',
    marginBottom: '1rem',
    lineHeight: '1.4',
  },

  span: {
    fontSize: '$xl',
    marginBottom: '2.5rem',
    color: '$green500',
  },

  p: {
    color: '$gray100',
    marginBottom: '2.5rem',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: '0',
    color: '$white',
    borderRadius: '8px',
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
      transition: '0.2s all',
    },
  },

  '@sm': {
    flex: '1 1 100%',
    h1: {
      fontSize: '$2xl',
    },

    span: {
      fontSize: '$2xl',
    },
  },

  '@md': {
    flex: '1 1 50%',
    padding: '1.5rem 2.5rem 0',
  },

  '@lg': {
    padding: '1.5rem 4.5rem 0',
  },
})
