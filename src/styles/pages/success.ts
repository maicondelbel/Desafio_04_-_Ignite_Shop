import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1220px',
  margin: 'auto',
  minHeight: '656px',
  padding: '0 1.25rem',

  h1: {
    marginBottom: '1.5rem',
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    marginBottom: '4rem',
    color: '$gray300',
    maxWidth: '520px',
    textAlign: 'center',
  },

  a: {
    fontSize: '$md',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
      transition: '0.2s all',
    },
  },
})

export const SuccessImagesContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '3rem',

  'div + div': {
    marginLeft: '-3.25rem',
    zIndex: '20',
  },
})

export const SuccessImageContainer = styled('div', {
  width: '140px',
  height: '140px',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  borderRadius: '50%',
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
