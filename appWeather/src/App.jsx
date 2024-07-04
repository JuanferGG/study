import { Box, Button, Typography } from "@mui/material";
import { Layout } from "./Layout/Layout";
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui';
import * as Yup from "yup";
import { useWeatherData } from "./Utils/Api";
import { useState } from "react";
import { InfoWeather } from "./Components/InfoWeather";

const validateSchema = Yup.object({
  city: Yup.string().required("City is required").min(3, 'Min required three(3) characters'),
});

function App() {
  const [city, setCity] = useState('bogota');
  const { data, isLoading } = useWeatherData(city);

  const onSubmit = (values, { setSubmitting }) => {
    setCity(values.city);
    setSubmitting(false);
  };

  return (
    <Layout>
      <Box
        component="div"
        width={{ xs: "100%", md: "80%"  }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4}
        gap={2}
      >
        <Typography
          variant="h2"
          textAlign="center"
          color="primary"
          fontWeight="bold"
        >
          Weather App
        </Typography>
        <Formik
          initialValues={{ city: "" }}
          validationSchema={validateSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form
              style={{
                width: "80%",
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                alignItems: "center",
              }}
            >
              <Box width="100%" display="flex" gap={2} alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                  Search City:
                </Typography>
                <Field
                  component={TextField}
                  variant="outlined"
                  label="Enter your City"
                  sx={{ flexGrow: 1 }}
                  name="city"
                  type="text"
                />
              </Box>
              <Button type="submit" variant="contained" fullWidth>
                Search
              </Button>
            </Form>
          )}
        </Formik>
        <InfoWeather data={data} isLoading={isLoading} />
      </Box>
    </Layout>
  );
}

export default App;
