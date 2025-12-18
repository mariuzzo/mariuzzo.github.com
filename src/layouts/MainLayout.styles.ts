import styled from 'styled-components'
import { theme } from '../theme'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  max-width: 800px;
  margin: auto;
  padding: 0 1rem;

  ${theme.breakpoints.up('lg')} {
    padding: 0 2rem;
  }
`
