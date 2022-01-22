import { Grid } from "@mui/material";
import "./FooterTop.css";

function FooterTop() {
  return (
    <div className="footerTop">
      <div className="footerTop__container">
        <Grid container spacing={5}>
          <Grid xs={12} md={3}>
            <div className="footerTop_one">
              <span className="footerTop__logo">Logo here</span>
            </div>
          </Grid>
          <Grid xs={12} md={3}>
            <div className="footerTop__two">
              <p className="footerTop__text">Home</p>
              <p className="footerTop__text">Dashbord</p>
              <p className="footerTop__text">Services</p>
              <p className="footerTop__text">Projects</p>
              <p className="footerTop__text">Roadmap</p>
            </div>
          </Grid>
          <Grid xs={12} md={3}>
            <div className="footerTop__three">
              <p className="footerTop__text">About</p>
              <p className="footerTop__text">Team</p>
              <p className="footerTop__text">FAQ's</p>
              <p className="footerTop__text">WhitePapper</p>
            </div>
          </Grid>
          <Grid xs={12} md={3}>
            <div className="footerTop__four">
              <p className="footerTop__text">Company</p>
              <p className="footerTop__text">Policy service</p>
              <p className="footerTop__text">Terms of use</p>
            </div>
          </Grid>
        </Grid>

        {/* <div className="footerTop_one">
          <span className="footerTop__logo">Logo here</span>
        </div>
        <div className="footerTop__two">
          <p className="footerTop__text">Home</p>
          <p className="footerTop__text">Dashbord</p>
          <p className="footerTop__text">Services</p>
          <p className="footerTop__text">Projects</p>
          <p className="footerTop__text">Roadmap</p>
        </div>
        <div className="footerTop__three">
          <p className="footerTop__text">About</p>
          <p className="footerTop__text">Team</p>
          <p className="footerTop__text">FAQ's</p>
          <p className="footerTop__text">WhitePapper</p>
        </div>
        <div className="footerTop__four">
          <p className="footerTop__text">Company</p>
          <p className="footerTop__text">Policy service</p>
          <p className="footerTop__text">Terms of use</p>
        </div> */}
      </div>
    </div>
  );
}

export default FooterTop;
