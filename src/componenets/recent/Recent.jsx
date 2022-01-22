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
import "./Recent.css";
import React from "react";

function Recent() {
  return (
    <div className="recent">
      <div className="recent__container">
        <div className="recent__title">
          <Typography variant="h5">Recent Gaming and NFT Launches</Typography>
        </div>
        <div className="recent__paragraph">
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </div>

        <Grid
          className="recent__cardContainer"
          sx={{ margin: "" }}
          container
          spacing={3}
        >
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            xs={12}
            md={2}
          >
            <Card className="recent__card">
              <CardMedia
                className="recent__cardImage"
                component="img"
                height="194"
                image="https://s2.coinmarketcap.com/static/img/coins/200x200/3134.png"
                alt="Paella dish"
              />

              <CardContent className="recent__cardContent">
                <Typography variant="h5">ETERNAL</Typography>
                <Typography className="recent__color">272X</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={12}
            md={2}
          >
            <Card className="recent__card">
              <CardMedia
                className="recent__cardImage"
                component="img"
                height="194"
                image="https://qbit.money/img/blog-img/2.png"
                alt="Paella dish"
              />

              <CardContent className="recent__cardContent">
                <Typography variant="h5">QBIT</Typography>
                <Typography className="recent__color">272X</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={12}
            md={2}
          >
            <Card className="recent__card">
              <CardMedia
                className="recent__cardImage"
                component="img"
                height="194"
                image="https://s2.coinmarketcap.com/static/img/coins/200x200/9629.png"
                alt="Paella dish"
              />

              <CardContent className="recent__cardContent">
                <Typography variant="h5">GMR</Typography>
                <Typography className="recent__color">272X</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={12}
            md={2}
          >
            <Card className="recent__card">
              <CardMedia
                className="recent__cardImage"
                component="img"
                height="194"
                image="https://assets.coingecko.com/coins/images/20967/large/FFNaTMMXIAk9d5y.jpg?1638152796"
                alt="Paella dish"
              />
              <CardContent className="recent__cardContent">
                <Typography variant="h5">SSG</Typography>
                <Typography className="recent__color">272X</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={12}
            md={2}
          >
            <Card className="recent__card">
              <CardMedia
                className="recent__cardImage"
                component="img"
                height="194"
                image="https://assets.coingecko.com/coins/images/20967/large/FFNaTMMXIAk9d5y.jpg?1638152796"
                alt="Paella dish"
              />
              <CardContent className="recent__cardContent">
                <Typography variant="h5">SSG</Typography>
                <Typography className="recent__color">272X</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={12}
            md={2}
          >
            <Card className="recent__card">
              <CardMedia
                className="recent__cardImage"
                component="img"
                height="194"
                image="https://assets.coingecko.com/coins/images/20967/large/FFNaTMMXIAk9d5y.jpg?1638152796"
                alt="Paella dish"
              />
              <CardContent className="recent__cardContent">
                <Typography variant="h5">SSG</Typography>
                <Typography className="recent__color">272X</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Recent;
