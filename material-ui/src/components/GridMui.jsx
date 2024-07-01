import { Container, Grid } from "@mui/material";

const items = [1, 2, 3, 4, 5, 6, 7];

export const GridMui = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" gap={2}>
        {items.map((item) => (
          <Grid
            item
            xs={9}
            md={4}
            lg={3}
            key={item}
            sx={{ bgcolor: "whitesmoke" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
