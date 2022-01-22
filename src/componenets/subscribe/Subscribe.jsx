import { Grid } from "@mui/material";
import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe__container">
        <Grid sx={{ marginRight: "100px" }} xs={12} md={3}>
          <div className="subscribe__image">
            <img src="s1.png" alt="" />
          </div>
        </Grid>

        <div className="subscribe__detailsSection">
          <div className="subscribe__detailsSectionItem">
            <p className="subscribe__detailsSectionTitle">
              Subscribe to our newsletter
            </p>
          </div>
          <div className="subscribe__detailsSectionItem">
            <p className="subscribe__detailsSectionParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="subscribe__detailsSectionItem">
            <input
              className="subscribe__detailsSectionInput"
              type="email"
              placeholder=" Enter your Email"
            />
          </div>
          <div className="subscribe__detailsSectionItem">
            <button class="custom-btn btn-3">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
