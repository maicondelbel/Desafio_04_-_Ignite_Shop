import { styled } from '..'

export const HomeContainer = styled('main', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1220px) / 2))',
  marginLeft: 'auto',
  position: 'relative',
  minHeight: '656px',

  '.swiper-button-prev': {
    color: '$gray300',
    background:
      'linear-gradient(90deg, rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0) 100%)',
    height: '100%',
    top: 0,
    margin: 0,
    paddingLeft: '1rem',
    width: '8.5rem',
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
    width: '8.5rem',
    right: 0,
    justifyContent: 'flex-end',
  },
})
