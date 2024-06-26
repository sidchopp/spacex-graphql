import { useQuery } from "@apollo/client";
import { GET_COMPANY } from "../queries";
import { Loader } from "../components";

//MUI
import { Grid, Box, Typography, Container } from "@mui/material";

//React-Icons
import { SiSpacex } from "react-icons/si";

const AboutCompany = () => {
  const { loading, error, data } = useQuery(GET_COMPANY);

  if (error) return <p>`Error :( ${error.message}`</p>;

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <Box
        sx={{
          pt: 1,
          pb: 1,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <span className="main-font">SPACE </span>
            <span className="spacex-icon">
              <SiSpacex />
            </span>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            <span className="main-font "> {data.company.summary}</span>
          </Typography>
          <Container maxWidth="md">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="div"
                  align="left"
                  color="text.primary"
                >
                  <span className="main-font heading-info">
                    {data.company.ceo}
                  </span>
                </Typography>
                <Typography
                  align="left"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <span className="main-font">
                    {" "}
                    <i> CEO & Founder </i>
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="div"
                  align="right"
                  color="text.primary"
                >
                  <span className="main-font heading-info">
                    {" "}
                    {data.company.headquarters.state}
                  </span>
                </Typography>
                <Typography
                  align="right"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <span className="main-font">
                    {" "}
                    <i> Headquarter </i>
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="div"
                  align="left"
                  color="text.primary"
                >
                  <span className="main-font heading-info">
                    {" "}
                    {data.company.employees}+
                  </span>
                </Typography>
                <Typography
                  align="left"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <span className="main-font">
                    <i> Employees </i>
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  component="div"
                  align="right"
                  color="text.primary"
                >
                  <b>
                    <a
                      href={data.company.links.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="main-font heading-info">SpaceX</span>
                    </a>
                  </b>
                </Typography>
                <Typography
                  align="right"
                  variant="caption"
                  display="block"
                  color="text.secondary"
                >
                  <span className="main-font">
                    <i> Official website </i>
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </main>
  );
};

export { AboutCompany };
