import { Grid } from "@mui/material";
import "./FooterBottom.css";

function FooterBottom() {
  return (
    <div className="footerBottom">
      <div className="footerBottom__container">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className="footerBottom__left">
              <p className="footerBottom__text">
                Name Here All rights reserved @ 2021
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="footerBottom__right">
              <img src=" i1.png " alt="" className="footerBottomIcon" />
              <img src=" i2.png " alt="" className="footerBottomIcon" />
              <img src=" i3.png " alt="" className="footerBottomIcon" />
              <img src=" i4.png " alt="" className="footerBottomIcon" />
              <img src=" i5.png " alt="" className="footerBottomIcon" />
              <img src=" i6.png " alt="" className="footerBottomIcon" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default FooterBottom;
