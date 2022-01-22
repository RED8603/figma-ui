import { CssBaseline } from "@mui/material";
import { useRef } from "react";
import "./App.css";
import About from "./componenets/about/About";
import AboutDetails from "./componenets/aboutDetails/AboutDetails";
import Docoment from "./componenets/docoment/Docoment";
import FooterBottom from "./componenets/footerBottom/FooterBottom";
import FooterTop from "./componenets/footerTop/FooterTop";
import Freq from "./componenets/freq/Freq";
import Navbar from "./componenets/navbar/Navbar";
import Newsandmedia from "./componenets/newsandmedia/Newsandmedia";
import Partners from "./componenets/partners/Partners";
import Recent from "./componenets/recent/Recent";
import Roadmap from "./componenets/roadmap/Roadmap";
import Subscribe from "./componenets/subscribe/Subscribe";
import TokenDistribution from "./componenets/tokenDistribution/TokenDistribution";
import UpcomingProjects from "./componenets/upcomingProjects/UpcomingProjects";
import Header from "./header/Header";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />

      <Header />

      <Recent />

      <UpcomingProjects />

      <About />
      <AboutDetails />
      <TokenDistribution />

      <Roadmap />

      <Partners />

      <Newsandmedia />
      <Docoment />
      <Subscribe />
      <Freq />

      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default App;
