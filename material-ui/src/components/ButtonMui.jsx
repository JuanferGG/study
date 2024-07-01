import { Box, Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'


export const ButtonMui = () => {
  return (
    <>
      <Typography variant='h4' color='primary' >Theme Color Primary</Typography>
      <Box maxWidth='40vw' display="flex" flexWrap="wrap" justifyContent="space-around" sx={{ bgcolor: 'whitesmoke' }} >
        <Button
          onClick={() => console.log('Sirve normal')}
          variant='contained'
          color='error'
          startIcon={<DeleteIcon />} >
          Un boton Random
        </Button>
        <Button
          onClick={() => console.log('Sucess')}
          variant='contained'
          color='success'
          startIcon={<DoneIcon />} >
          Un boton Random
        </Button>
      </Box>
    </>
  )
}
