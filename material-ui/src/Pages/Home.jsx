import { Alert, Container, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import Stack from '@mui/material/Stack';

export const Home = () => {
  return (
    <Container
      sx={{
        width: "100%",
        height: "calc(100vh - 5em)",
        bgcolor: "whitesmoke",
        boxShadow: "0 0 7px grey",
        borderRadius: 2,
      }}
    >
      <Typography variant="h2">Home</Typography>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>


      <Stack sx={{ width: '100%' }} spacing={2}>
        <Typography variant="h2">Alerts</Typography>
        <Alert severity="success">This is a success Alert.</Alert>
        <Alert severity="info">This is an info Alert.</Alert>
        <Alert severity="warning">This is a warning Alert.</Alert>
        <Alert severity="error">This is an error Alert.</Alert>
      </Stack>
    </Container>
  );
};
