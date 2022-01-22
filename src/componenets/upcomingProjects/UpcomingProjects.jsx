import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./UpcomingProjects.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import b1 from "../../img/button1.png";
import b2 from "../../img/button2.png";
function UpcomingProjects() {
  const [width, setWidth] = useState("");

  const handle = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handle);

  return (
    <div className="upcomingProjects">
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        container
      >
        <Grid className="upcomingProjects__actions" item xs={12} xl={12}>
          <div className="upcomingProjects__actionsButtons">
            <IconButton size="large">
              <span
                style={{ backgroundImage: `url(${b1})` }}
                className="button__imageWrapper"
              >
                {" "}
                <p className="button__text">Connect</p>{" "}
              </span>
            </IconButton>{" "}
            <IconButton size="large">
              <span
                style={{ backgroundImage: `url(${b2})` }}
                className="button__imageWrapper"
              >
                {" "}
                <p className="button__text">How it works</p>{" "}
              </span>
            </IconButton>{" "}
          </div>
          <div
            style={{ flexGrow: "1" }}
            className="upcomingProjects__actionsGrow"
          ></div>

          <div className="upcomingProjects__actionsViewmore">
            <span className="upcomingProjects__actionsViewmoreTexT">
              View More
            </span>
            <IconButton size="large">
              <AiOutlineArrowRight style={{ color: "white" }} />
            </IconButton>
          </div>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px",
            padding: "20px",
            backgroundColor: "#110713",
          }}
          item
          xs={12}
          md={4}
        >
          <Card sx={{ backgroundColor: "#110713", color: "white" }}>
            <CardMedia
              className="card__image"
              component="img"
              image="card2.png"
            />

            <CardContent className="upcomingProjects__cardContents">
              <div className="upcomingProjects__cardContentsLeft flex">
                <Typography variant="h5">Humans</Typography>

                <p>$BXN</p>

                <div className="flexGrow" style={{ flexGrow: "1" }}></div>

                <p>Total Rais</p>
                <p> Personal allisition</p>
              </div>

              <div style={{ flexGrow: "1" }}></div>

              <div className="upcomingProjects__cardContentsRight  flex">
                <Avatar></Avatar>

                <div className="flexGrow" style={{ flexGrow: "1" }}></div>

                <p>$876</p>
                <p> $4845</p>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <div className="flexGrow" style={{ flexGrow: "1" }}></div>

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px",
            padding: "20px",
            backgroundColor: "#110713",
          }}
          item
          xs={12}
          md={4}
        >
          <Card sx={{ backgroundColor: "#110713", color: "white" }}>
            <CardMedia
              className="card__image"
              component="img"
              image="card2.png"
              alt="Paella dish"
            />

            <CardContent className="upcomingProjects__cardContents">
              <div className="upcomingProjects__cardContentsLeft flex">
                <Typography variant="h5">Humans</Typography>

                <p>$BXN</p>

                <div className="flexGrow" style={{ flexGrow: "1" }}></div>

                <p>Total Rais</p>
                <p> Personal allisition</p>
              </div>

              <div style={{ flexGrow: "1" }}></div>

              <div className="upcomingProjects__cardContentsRight  flex">
                <Avatar></Avatar>

                <div className="flexGrow" style={{ flexGrow: "1" }}></div>

                <p>$876</p>
                <p> $4845</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default UpcomingProjects;
