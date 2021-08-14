import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../styles/GlobalStyles'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { theme } from '../styles/theme'

import * as S from './MainLayout.styles'

export const MainLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
      </S.Container>
    </ThemeProvider>
  )
}
