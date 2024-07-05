import { Container } from '@mui/material'
import { Header } from '../components/Header/Header'

export const Layout = ({ children }) => {
  return (
    <Container maxWidth='xl'>
        <Header />
        { children }
    </Container>
  )
}
