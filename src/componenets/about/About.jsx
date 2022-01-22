import "./About.css";
import bg from "../../img/about.png";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";

function About() {
  const [width, setWidth] = useState("");
  const handle = () => {
    setWidth(window.innerWidth);

    console.log(width);
  };

  window.addEventListener("resize", handle);

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="about">
      {width > 700 ? <div className="about__left"></div> : ""}

      <div className="about__right">
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
              padding: "10px",
            }}
            item
            xs={12}
          >
            <Typography variant="h3">About Us</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
              padding: "10px",
            }}
            item
            xs={8}
            md={8}
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="flex"
            item
            xs={6}
            xl={6}
          >
            <img className="pad" src="l1.png" alt="" />

            <Typography>Launch Project</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="flex"
            item
            xs={6}
            xl={6}
          >
            <img className="pad" src="b1.png" alt="" />

            <Typography>Token Minter</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="flex"
            item
            xs={6}
            xl={6}
          >
            <img className="pad" src="locker.png" alt="" />

            <Typography>Liquiuty Locker</Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="flex"
            item
            xs={6}
            xl={6}
          >
            <img className="pad" src="locker.png" alt="" />

            <Typography> Token locker</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
