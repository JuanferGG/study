/* eslint-disable react/prop-types */
import { Box, Skeleton, Typography } from "@mui/material";

const SkeletonCard = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap=".7em">
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={210}
        height={60}
      />
      <Skeleton animation="wave" variant="circular" width={70} height={70} />
      <Skeleton animation="wave" variant="rounded" width={210} height={30} />
      <Skeleton animation="wave" variant="rounded" width={210} height={30} />
    </Box>
  );
};

// eslint-disable-next-line react/prop-types
export const InfoWeather = ({ data, isLoading }) => {
  return (
    <>
      {isLoading && <SkeletonCard />}
      {data === undefined && isLoading === false ? (
        <Typography variant="h5" color="error">
          City not Found
        </Typography>
      ) : (
        ""
      )}
      {data && (
        <Box
          mt={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <Typography variant="h3" fontWeight="bold">
            City: {data.location.name}
          </Typography>
          <Box display="flex" gap="1em">
            <Typography variant="h6">
              <b>Country</b>: {data.location.country}
            </Typography>
            <Typography variant="h6">
              <b>Region</b>: {data.location.region}
            </Typography>
          </Box>
          <Box
            component="img"
            src={data.current.condition.icon}
            width={100}
            height={100}
          ></Box>
          <Typography variant="h6">
            <b>Temperature:</b> {data.current.temp_c}°C
          </Typography>
          <Typography variant="h6">
            <b>Date:</b> {data.location.localtime}
          </Typography>
          <Typography variant="h6">
            <b>Condition:</b> {data.current.condition.text}
          </Typography>
        </Box>
      )}
    </>
  );
};
