import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1220px',
  margin: 'auto',
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
  flex: '1 1 50%',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'stretch',
  padding: '1.5rem 4.5rem 0',

  h1: {
    fontSize: '$2xl',
    marginBottom: '1rem',
    lineHeight: '1.4',
  },

  span: {
    marginBottom: '2.5rem',
    color: '$green500',
    fontSize: '$2xl',
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
})
