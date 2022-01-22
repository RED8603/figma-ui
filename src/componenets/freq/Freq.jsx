import "./Freq.css";
import { FaEthereum } from "react-icons/fa";
import { Grid } from "@mui/material";

function Freq() {
  return (
    <div className="freq">
      <Grid container spacin={3}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "20px",
            padding: "20px",
          }}
        >
          <p className="freq__title">
            Frequently Ask{" "}
            <strong style={{ color: "#AD15F4" }}> Questions</strong>
          </p>
          <div className="freq__leftItem">
            <p className="freq__leftParagraph">
              <strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </strong>
            </p>

            <FaEthereum style={{ color: "#AD15F4", fontSize: "30px" }} />
          </div>
          <div className="freq__leftItem">
            <p className="freq__leftParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry?
            </p>
            <FaEthereum style={{ color: "#AD15F4", fontSize: "30px" }} />
          </div>
          <div className="freq__leftItem">
            <p className="freq__leftParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry?
            </p>
            <FaEthereum style={{ color: "#AD15F4", fontSize: "30px" }} />
          </div>
          <div className="freq__leftItem">
            <p className="freq__leftParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry?
            </p>
            <FaEthereum style={{ color: "#AD15F4", fontSize: "30px" }} />
          </div>
          <div className="freq__leftItem">
            <p className="freq__leftParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry?
            </p>
            <FaEthereum style={{ color: "#AD15F4", fontSize: "30px" }} />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "20px",
            padding: "20px",
          }}
        >
          <p className="freq__RightParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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

      {/* <div className="freq__containr">
        <div className="freq__left">
          <p className="freq__title">
            Frequently Ask{" "}
            <strong style={{ color: "#AD15F4" }}> Questions</strong>
          </p>
          <div className="freq__leftItem">
            <p className="freq__leftParagraph">
              <strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry?
              </strong>
            </p>

            <FaEthereum style={{ color: "#AD15F4", fontSize: "30px" }} />
          </div>
          <div className="freq__leftItem">
            <p className="freq__leftParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry?
            </p>
            <FaEthereum style={{ color: "#AD15F4", fontSize: "30px" }} />
          </div>
          <div className="freq__leftItem">
            <p className="freq__leftParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry?
            </p>
            <FaEthereum style={{ color: "#AD15F4", fontSize: "30px" }} />
          </div>
          <div className="freq__leftItem">
            <p className="freq__leftParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry?
            </p>
            <FaEthereum style={{ color: "#AD15F4", fontSize: "30px" }} />
          </div>
          <div className="freq__leftItem">
            <p className="freq__leftParagraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry?
            </p>
            <FaEthereum style={{ color: "#AD15F4", fontSize: "30px" }} />
          </div>
        </div>

        <div className="freq__Right">
          <p className="freq__RightParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
        </div>
      </div> */}
    </div>
  );
}

export default Freq;
