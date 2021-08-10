import * as React from 'react'
import * as S from './MainLayout.styles'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Header } from '../components/Header'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

export const MainLayout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        {children}
      </ThemeProvider>
    </S.Container>
  )
}
