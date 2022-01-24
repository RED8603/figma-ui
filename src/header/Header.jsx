import "./Header.css";
import bg from "../img/headerBG.jpg";
import { Container, Grid, IconButton, Typography } from "@mui/material";

import React from "react";
import { padding } from "@mui/system";
import b1 from "../img/button1.png";
import b2 from "../img/button2.png";

function Header() {
  const styles = {
    logo: {
      fontFamily: "Gemunu Libre",
      fontStyle: "normal",
      fontWeight: "bold",
      maxWidth: " 579px",

      lineHeight: "94.7%",
      fontSize: {
        lg: "77px",
        md: "50px",
        sm: "40px",
        xs: "30px",
      },
      margin: "0 100px",
    },
    paragraph: {
      fontSize: {
        lg: "20px",
        md: "20px",
        sm: "15px",
        xs: "10px",
      },
      maxWidth: " 530px",
      marginTop: "20px",
      margin: "0 100px",
    },
  };
  return (
    <div className="header">
      <div
        className="imageWrapper"
        style={{ backgroundImage: `url(${bg})`, minHeight: "989" }}
      >
        <Grid container>
          <Grid sx={{}} item xs={12} md={12}>
            <Typography className="header__title" sx={styles.logo}>
              METASTARTER Binance Crypto Exchange
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography className="header__paragraph" sx={styles.paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Typography>
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
            xs={12}
            md={5}
          >
            <IconButton size="large">
              <span style={{}} className="button__imageWrapper">
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
          </Grid>

          <Grid
            className="mdClass"
            sx={{
              display: "flex",
            }}
            item
            xs={12}
            md={12}
          >
            <div className="smallbubble one">
              {" "}
              <p className="upperText"> Total Exchange </p>
              <p className="lower__text">
                {" "}
                <strong>$45,000,000</strong>{" "}
              </p>
            </div>

            <div className="bigbubble two">
              {" "}
              <p className="upperText"> Total Exchange </p>
              <p className="lower__text">
                {" "}
                <strong>$45,000,000</strong>{" "}
              </p>
            </div>

            <div className="smallbubble three">
              {" "}
              <p className="upperText"> Total Exchange </p>
              <p className="lower__text">
                {" "}
                <strong>$45,000,000</strong>{" "}
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
