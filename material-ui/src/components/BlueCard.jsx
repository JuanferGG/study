import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

export const BlueCard = () => {
  return (
    <Container maxWidth="md">
      <Card
        sx={{
            transition: '.4s ease',
            "&:hover": {
                transform: 'scale(1.05)'
            }
        }}
      >
        <CardActionArea
            onClick={ (e) => console.log(e.target.src) }
        >
          <CardMedia
            component="img"
            image="https://i.imgur.com/VjXbdOY.jpg"
            height={"200"}
          />
        </CardActionArea>
        <CardContent>
          <Typography variant="h3">Card title</Typography>
          <Typography component="p" variant="body2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
          <CardActions>
            <Button variant="contained" onClick={() => console.log('Click')}>Click Add</Button>
            <Button color="error" onClick={() => console.log('Remove')} >Remove</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Container>
  );
};
