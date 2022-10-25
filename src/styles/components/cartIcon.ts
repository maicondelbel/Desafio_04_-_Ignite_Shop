import { styled } from '..'

export const CartIconContainer = styled('div', {
  display: 'flex',
  padding: '0.75rem',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray800',
  borderRadius: '8px',
  position: 'relative',
  cursor: 'pointer',
  marginLeft: 'auto',

  svg: {
    color: '$gray300',
  },
})

export const CartIconBadgeContainer = styled('span', {
  backgroundColor: '$green500',
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '-0.75rem',
  right: '-0.75rem',
  outline: '3px solid $gray900',
  fontWeight: 'bold',
  fontSize: '$xs',
})
