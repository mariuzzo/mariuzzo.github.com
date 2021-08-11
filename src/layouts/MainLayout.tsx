import * as React from 'react'
import * as S from './MainLayout.styles'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

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
