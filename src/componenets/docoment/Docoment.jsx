import "./Docoment.css";
import d1 from "../../img/d1.png";
import d2 from "../../img/d2.png";
import { BsCloudDownload } from "react-icons/bs";
import { Grid } from "@mui/material";

function Docoment() {
  return (
    <div className="docoment">
      <Grid container spacing={3}>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={12}
          md={6}
        >
          <div
            style={{ backgroundImage: `url(${d1})` }}
            className="imageWrapper__left"
          >
            <p className="imageText__left">WhitePaper</p>
          </div>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          item
          xs={12}
          md={6}
        >
          <p className="docoment__rightTitle">
            {" "}
            Official <strong>Docoment</strong>{" "}
          </p>
          <p className="docoment__rightParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </Grid>
      </Grid>
      {/* 
      <div className="docoment__container">
        <div className="docoment__containerLeft">
          <div
            style={{ backgroundImage: `url(${d1})` }}
            className="imageWrapper__left"
          >
            <p className="imageText__left">WhitePaper</p>
          </div>
        </div>
        <div className="docoment__containerRight">
          <p className="docoment__rightTitle">
            {" "}
            Official <strong>Docoment</strong>{" "}
          </p>
          <p className="docoment__rightParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <div className="docoment__rightImages">
            <div
              style={{ backgroundImage: `url(${d2})` }}
              className="right__imagWrapper"
            >
              {" "}
              <p className="right__imageText"> Whitepaper </p>{" "}
              <BsCloudDownload style={{ fontWeight: "800" }} />{" "}
            </div>

            <div
              style={{ backgroundImage: `url(${d2})` }}
              className="right__imagWrapper"
            >
              <p className="right__imageText"> Audit Report </p>{" "}
              <BsCloudDownload style={{ fontWeight: "800" }} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Docoment;
