import styled from "@emotion/styled";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";

const CardExample = () => {

  const FnstylesObject = ( theme ) => {
    return ({
      width: 200,
      height: 200,
      objectFit: 'contain',
      objectPosition: 'center',
      [theme.breakpoints.down('sm')]: {
        width: 100,
        height: 100,
      }
    })
  }

  const Img = styled('img')(({ theme }) => (FnstylesObject(theme)));

  return (
    <Container maxWidth="lg">
      <Paper
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          padding: 1,
          mt: 2,
          flexDirection: "row",
          [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            alignItems: "flex-start",
          }
        })}
      >
        <Img src='https://via.placeholder.com/200' />
        <Box sx={{ flexGrow: 0.9, textAlign: { xs: 'center', sm: 'left' } }} >
          <Typography variant="h4">Product Name</Typography>
          <Typography variant="subtitle1">Product Description</Typography>
          <Button variant="contained">Add product</Button>
        </Box>
        <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography variant='h6'>$ 19.99</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default CardExample;
