import { Grid, Typography } from "@mui/material";
import "./Roadmap.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Roadmap() {
  const style = {
    title: {
      fontFamily: "Nova Flat",
      fontStyle: "normal",
      fontWeight: "normal",

      lineHeight: "45px",

      color: "#FFFFFF",
      fontSize: {
        lg: "37px",
        md: "37px",
        sm: "20px",
        xs: "20px",
      },
      margin: "20px",
      padding: "20px",
    },
    paragraph: {
      fontFamily: "Nova Flat",
      fontStyle: "normal",
      fontWeight: "normal",

      lineHeight: "19px",

      color: "#FFFFFF",
      fontSize: {
        lg: "16px",
        md: "16px",
        sm: "10px",
        xs: "10px",
      },
      maxWidth: "400px",
    },
  };

  return (
    <div className="roadmap">
      <Grid container xs={12}>
        <Grid item xs={12}>
          <p className="roadmap__title">RoadMap</p>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          xs={12}
        >
          <p className="roadmap__middleText">2022</p>
          <p className="roadmap__smallText">2022</p>
          <p className="roadmap__smallText">2022</p>
        </Grid>

        <Grid container spacing={3}>
          <Swiper
            pagination={true}
            navigation={true}
            spaceBetween={0}
            slidesPerView={2}
            p={2}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
          >
            <SwiperSlide>
              <Grid
                item
                xs={12}
                sx={{
                  dispaly: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  margin: "30px",
                  padding: "30px",
                }}
              >
                <Typography sx={style.title}>Q2</Typography>

                <ul className="aboutDetails__list">
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                </ul>
              </Grid>
            </SwiperSlide>

            <SwiperSlide>
              <Grid
                item
                xs={12}
                sx={{
                  dispaly: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  margin: "30px",
                  padding: "30px",
                }}
              >
                <Typography sx={style.title}>Q2</Typography>

                <ul className="aboutDetails__list">
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                </ul>
              </Grid>
            </SwiperSlide>

            <SwiperSlide>
              <Grid
                item
                xs={12}
                sx={{
                  dispaly: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  margin: "30px",
                  padding: "30px",
                }}
              >
                <Typography sx={style.title}>Q2</Typography>

                <ul className="aboutDetails__list">
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                </ul>
              </Grid>
            </SwiperSlide>
            <SwiperSlide>
              <Grid
                item
                xs={12}
                sx={{
                  dispaly: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "30px",
                  padding: "30px",
                }}
              >
                <Typography sx={style.title}>Q3</Typography>

                <ul className="aboutDetails__list">
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                  <Typography sx={style.paragraph}>
                    {" "}
                    <li className="aboutDetails__listItem">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                  </Typography>
                </ul>
              </Grid>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>

      <Grid continer>
        {/* <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5px",
            zIndex: "2",
          }}
        >
          <div className="star"></div>
          <div className="star"></div>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="star"></span>
          <span className="star"></span>
        </Grid> */}
        <Grid item xs={12}>
          <div className="sliderBottom  barOne"></div>
        </Grid>
        <Grid item xs={12}>
          <div color="#7500AC" className="sliderBottom  barTwo"></div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Roadmap;
