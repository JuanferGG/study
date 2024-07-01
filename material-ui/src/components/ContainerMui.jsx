import { Container, Slider, Typography } from "@mui/material";

export const ContainerMui = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundColor: 'orange' }}>xl</Container>
      <Container maxWidth="lg" sx={{ backgroundColor: 'red' }}>lg</Container>
      <Container maxWidth="md" sx={{ backgroundColor: 'purple' }}>md</Container>
      <Container maxWidth="sm" sx={{ backgroundColor: 'cyan' }}>sm</Container>
      <Container maxWidth="xs" sx={{ backgroundColor: 'blue' }}>xs</Container>

        <Typography variant="h4" >Propiedad Sx</Typography>

      <Slider
        defaultValue={30}
        sx={{
          width: 300,
          color: 'success.main',
          '& .MuiSlider-thumb': {
            borderRadius: '1px',
          },
        }}
      />
    </>
  );
};
