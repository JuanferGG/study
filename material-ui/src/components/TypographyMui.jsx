import { Container, Typography } from '@mui/material'
import React from 'react'

export const TypographyMui = () => {
  return (
    <Container maxWidth='lg' sx={{ backgroundColor: 'cyan' }}>
        <Typography sx={{ color: 'primary.main' }} variant='h1' >Esto es un texto h1</Typography>
        <Typography variant='h2' >Esto es un texto h2</Typography>
        <Typography variant='h3' >Esto es un texto h3</Typography>
        <Typography variant='h4' >Esto es un texto h4</Typography>
        <Typography variant='h5' >Esto es un texto h5</Typography>
        <Typography variant='h6' >Esto es un texto h6</Typography>
        <Typography variant='body1' >Esto es un texto body 1</Typography>
        <Typography variant='body2' >Esto es un texto body 2</Typography>
        <Typography variant='button' >Esto es un texto button</Typography>
        <Typography variant='caption' >Esto es un texto caption </Typography>
        <Typography variant='overline' >Esto es un texto overline </Typography>
        <Typography variant='subtitle1' >Esto es un texto subtitle 1 </Typography>
        <Typography variant='subtitle2' >Esto es un texto subtitle 2 </Typography>
        <Typography variant='inherit' >Esto es un texto inherit </Typography>
    </Container>
  )
}
