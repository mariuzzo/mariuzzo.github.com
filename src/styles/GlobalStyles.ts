import { createGlobalStyle } from 'styled-components'
import { $theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Source Sans Pro', sans-serif;
    color: ${$theme.color.copy};
    background-color: ${$theme.color.background};
    font-size: ${$theme.fontSize.base.px}px;
    padding: 0;
    margin: 0;
  }

  /**
   * Apply a natural box layout model to all elements, but allowing components to change.
   * https://www.paulirish.com/2012/box-sizing-border-box-ftw/
   */
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  *:focus {
    outline-color: ${$theme.color.link};
    outline-offset: .5rem;
  }
`
