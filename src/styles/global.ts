import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    lineHeight: '1.6',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, text-area, button': {
    fontFamily: 'Roboto',
    fontWeight: '400',
  },

  '::-webkit-scrollbar': {
    width: '10px',
  },

  '::-webkit-scrollbar-track': {
    background: '#09090A',
    borderRadius: '10px',
  },

  '::-webkit-scrollbar-thumb': {
    background: '#29292E',
    borderRadius: '10px',
  },

  '::-webkit-scrollbar-thumb:hover': {
    background: '#323238',
  },
})
