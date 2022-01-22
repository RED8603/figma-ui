import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import "./Newsandmedia.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function Newsandmedia() {
  return (
    <div className="newsandmedia">
      <p className="newsandmedia__title">
        News and <strong>Media</strong>
      </p>

      <div className="newsandmedia__container">
        <Card className="newsandmedia__card" sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="194" image="c1.png" />

          <CardContent className="newsandmedia__card">
            <Typography variant="h4">Title here</Typography>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </CardContent>

          <CardActions>
            <p className="newsandmedia__cardAction">Read more</p>{" "}
            <IconButton sx={{ color: "white" }} size="large">
              <AiOutlineArrowRight />
            </IconButton>
          </CardActions>
        </Card>
        <Card className="newsandmedia__card" sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="194" image="c2.png" />

          <CardContent className="newsandmedia__card">
            <Typography variant="h4">Title here</Typography>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </CardContent>
          <CardActions>
            <p className="newsandmedia__cardAction">Read more</p>{" "}
            <IconButton sx={{ color: "white" }} size="large">
              <AiOutlineArrowRight />
            </IconButton>
          </CardActions>
        </Card>
        <Card className="newsandmedia__card" sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="194" image="c3.png" />

          <CardContent className="newsandmedia__card">
            <Typography variant="h4">Title here</Typography>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </CardContent>
          <CardActions>
            <p className="newsandmedia__cardAction">Read more</p>{" "}
            <IconButton sx={{ color: "white" }} size="large">
              <AiOutlineArrowRight />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Newsandmedia;
