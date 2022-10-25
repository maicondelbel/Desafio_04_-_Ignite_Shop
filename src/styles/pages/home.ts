import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginLeft: 'auto',
  position: 'relative',
  minHeight: '520px',

  '.swiper-button-prev': {
    color: '$gray300',
    background:
      'linear-gradient(90deg, rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0) 100%)',
    height: '100%',
    top: 0,
    margin: 0,
    paddingLeft: '1rem',
    width: '3.5rem',
    left: 0,
    justifyContent: 'flex-start',
  },

  '.swiper-button-next': {
    color: '$gray300',
    background:
      'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',
    height: '100%',
    top: 0,
    margin: 0,
    paddingRight: '1rem',
    width: '3.5rem',
    right: 0,
    justifyContent: 'flex-end',
  },

  '@md': {
    '.swiper-button-next, .swiper-button-prev': {
      width: '8.5rem',
    },
  },
})
