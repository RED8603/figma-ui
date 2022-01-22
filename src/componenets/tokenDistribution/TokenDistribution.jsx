import "./TokenDistribution.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { List, ListItem } from "@mui/material";

function TokenDistribution() {
  return (
    <Grid
      container
      sx={{
        background: "#0a000c ",
        color: "white",
      }}
      spacing={3}
    >
      <Grid
        sx={{
          background: " #110713",
          border: " 1px solid #AD15F4",
          boxSizing: "border-box",
          backdropFilter: " blur(40px)",
          borderRadius: "53px",

          borderLeft: "none",
          display: "flex",
        }}
        md={8}
        spacing={3}
        container
        className="tokenDistribution__pieTitle"
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          xs={12}
          md={6}
        >
          <p color="white" className="tokenDistribution__pieTitleText">
            {" "}
            Token <strong>Distribution </strong>{" "}
          </p>
          <img className="tokenDistribution__pieImage" src="pie.png" alt="" />
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          xs={12}
          md={5}
        >
          <List>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="custom__bullet"></span>{" "}
              <p className="custom__bulletText">Liquidity & Listing </p>{" "}
              <p>
                {" "}
                <strong className="custom__bulletText">20%</strong>{" "}
              </p>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span color="#5C01F2" className="custom__bullet"></span>{" "}
              <p className="custom__bulletText">Mining </p>{" "}
              <p>
                {" "}
                <strong className="custom__bulletText">20%</strong>{" "}
              </p>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span color="#AD00FF" className="custom__bullet"></span>{" "}
              <p className="custom__bulletText">Ecosystem </p>{" "}
              <p>
                {" "}
                <strong className="custom__bulletText">20%</strong>{" "}
              </p>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span color="#69009A" className="custom__bullet"></span>{" "}
              <p className="custom__bulletText">Advoiser </p>{" "}
              <p>
                {" "}
                <strong className="custom__bulletText">20%</strong>{" "}
              </p>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span color="#5E00BC" className="custom__bullet"></span>{" "}
              <p className="custom__bulletText">Private Sales </p>{" "}
              <p>
                {" "}
                <strong className="custom__bulletText">20%</strong>{" "}
              </p>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span color="#993CF6" className="custom__bullet"></span>{" "}
              <p className="custom__bulletText">Public sales </p>{" "}
              <p>
                {" "}
                <strong className="custom__bulletText">20%</strong>{" "}
              </p>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span color="#40007F" className="custom__bullet"></span>{" "}
              <p className="custom__bulletText">Team </p>{" "}
              <p>
                {" "}
                <strong className="custom__bulletText">20%</strong>{" "}
              </p>
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {" "}
        <p className="mostRightTitle">
          {" "}
          Token <strong>Allocation </strong>{" "}
        </p>
        <div className="textWrapper__mostRight">
          <p>
            {" "}
            <strong>1,500,000 </strong>{" "}
          </p>
          <p className="textColor">Public sale</p>
        </div>
        <div className="textWrapper__mostRight">
          <p>
            {" "}
            <strong>0.13 USDT</strong>{" "}
          </p>
          <p className="textColor">Public sale price</p>
        </div>
        <div className="textWrapper__mostRight">
          <p>
            {" "}
            <strong>50% TEG, 25%</strong>{" "}
          </p>
          <p className="textColor">UNLOCK MONTHLY</p>
        </div>
      </Grid>
    </Grid>
  );
}

export default TokenDistribution;
