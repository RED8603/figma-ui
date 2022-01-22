import { Grid, Typography } from "@mui/material";
import "./AboutDetails.css";

function AboutDetails() {
  return (
    <div className="aboutDetails">
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography className="aboutDetails__title">Token Locker</Typography>

          <p className="aboutDetails__paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>

          <ul className="aboutDetails__list">
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img className="aboutDetails__rightImage" src="aboutD.png" alt="" />
        </Grid>
      </Grid>

      {/* inverting  */}

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img className="aboutDetails__rightImage" src="aboutD.png" alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="aboutDetails__title">
            {" "}
            Token <strong>Minter</strong>{" "}
          </p>

          <p className="aboutDetails__paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>

          <ul className="aboutDetails__list">
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>
        </Grid>
      </Grid>

      {/* 3 */}
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p className="aboutDetails__title">
            {" "}
            Token <strong>Locker</strong>{" "}
          </p>

          <p className="aboutDetails__paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>

          <ul className="aboutDetails__list">
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li className="aboutDetails__listItem">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img className="aboutDetails__rightImage" src="aboutD.png" alt="" />
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutDetails;
