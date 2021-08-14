import { up } from 'styled-breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  max-width: 800px;
  margin: auto;
  padding: 0 1rem;

  ${up('tablet')} {
    padding: 0 2rem;
  }
`
