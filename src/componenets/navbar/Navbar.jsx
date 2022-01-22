import {
  Grid,
  IconButton,
  Typography,
  createTheme,
  responsiveFontSizes,
  Menu,
  MenuItem,
} from "@mui/material";
import "./Navbar.css";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import b1 from "../../img/button1.png";

function Navbar() {
  const [width, setWidth] = useState("");
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const styles = {
    logo: {
      fontFamily: "Gemunu Libre",
      fontStyle: "normal",
      fontWeight: "bold",

      lineHeight: "26px",
      fontSize: {
        lg: "24px",
        md: "24px",
        sm: "15px",
        xs: "15px",
      },
    },
    navLinks: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",

      lineHeight: "22px",
      fontSize: {
        lg: "19px",
        md: "19px",
        sm: "15px",
        xs: "10px",
      },
      margin: "10px",
    },
  };
  const handle = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", handle);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <Grid container sx={{ height: "120px", backgroundColor: "#16002C" }}>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          xs={2}
        >
          {" "}
          <Typography sx={styles.logo}> Logo here </Typography>
        </Grid>

        {/* size check */}

        {width <= 1350 ? (
          <>
            <Grid item sx={{ flexGrow: "1" }}></Grid>

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={2}
            >
              <IconButton
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                size="large">
                <AiOutlineMenu color="white" />
              </IconButton>

              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem sx={{ listStyle: "none" }} onClick={handleClose}>
                  Home
                </MenuItem>
                <MenuItem sx={{ listStyle: "none" }} onClick={handleClose}>
                  DashBord
                </MenuItem>
                <MenuItem sx={{ listStyle: "none" }} onClick={handleClose}>
                  Servives
                </MenuItem>
                <MenuItem sx={{ listStyle: "none" }} onClick={handleClose}>
                  Projects
                </MenuItem>
                <MenuItem sx={{ listStyle: "none" }} onClick={handleClose}>
                  RoadMap
                </MenuItem>
                <MenuItem sx={{ listStyle: "none" }} onClick={handleClose}>
                  WitePapper
                </MenuItem>
              </Menu>
            </Grid>
          </>
        ) : (
          <>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
              item
              xs={8}
            >
              <IconButton size="large">
                <Typography color={"#AD15F4"} sx={styles.navLinks}>
                  Home
                </Typography>
              </IconButton>
              <IconButton size="large">
                <Typography color={"white"} sx={styles.navLinks}>
                  DashBord
                </Typography>
              </IconButton>
              <IconButton size="large">
                <Typography color={"white"} sx={styles.navLinks}>
                  Services
                </Typography>
              </IconButton>
              <IconButton size="large">
                <Typography color={"white"} sx={styles.navLinks}>
                  Projects
                </Typography>
              </IconButton>
              <IconButton size="large">
                <Typography color={"white"} sx={styles.navLinks}>
                  RoadMap
                </Typography>
              </IconButton>
              <IconButton size="large">
                <Typography color={"white"} sx={styles.navLinks}>
                  WhitePaper
                </Typography>
              </IconButton>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={2}
            >
              <IconButton size="large">
                <span
                  style={{ backgroundImage: `url(${b1})` }}
                  className="button__imageWrapper"
                >
                  {" "}
                  <p className="button__text">Connect</p>{" "}
                </span>
              </IconButton>{" "}
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}

export default Navbar;
