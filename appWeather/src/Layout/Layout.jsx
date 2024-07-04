import { Box } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <Box
      margin="auto"
      width="80%"
      height="100vh"
      display="flex"
      justifyContent="center"
      sx={{
        bgcolor: "whitesmoke",
        boxShadow: "0 0 4px grey",
        borderRadius: "10px",
      }}
    >
      {children}
    </Box>
  );
};
