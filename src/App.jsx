import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import bannerBg from "./Assets/backbanner.png";
import top1 from "./Assets/top (2).png";
import top2 from "./Assets/top (3).png";
import top3 from "./Assets/top (1).png";
import banner from "./Assets/banner-img.png";
import bannerRow1 from "./Assets/banner-row (1).png";
import bannerRow2 from "./Assets/banner-row (2).png";
import bannerRow3 from "./Assets/banner-row (3).png";
import bannerRow4 from "./Assets/banner-row (4).png";
import nav1 from "./Assets/bottom-nav (1).png";
import nav2 from "./Assets/bottom-nav (2).png";
import nav3 from "./Assets/bottom-nav (3).png";
import nav4 from "./Assets/bottom-nav (4).png";
import Collapse from "./Components/Collapse/Collapse";
function App() {
  return (
    <div className="App">
      <div className="top-box">
        <img src={top1} alt="" />
        <img src={top2} alt="" />
        <img src={top3} alt="" />
      </div>
      <div className="box-wrapper">
        <div className="box-banner">
          <img src={bannerBg} className="banner-bg" alt="" />
          <div className="top-banner">
            <div className="search">
              <div className="input-div">
                <input type="text" />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <h1>Relevant Information and Analytics</h1>
            </div>
            <img src={banner} alt="" />
          </div>
          <div className="banner-row">
            <div className="wrapper">
              <img src={bannerRow1} alt="" />
            </div>
            <div className="wrapper">
              <img src={bannerRow2} alt="" />
            </div>
            <div className="wrapper">
              <img src={bannerRow3} alt="" />
            </div>
            <div className="wrapper">
              <img src={bannerRow4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="faq-part">
        <h1>Active Projects</h1>
        <Collapse
          title={"Project Title"}
          answer={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, id. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, id."
          }
        />
        <Collapse
          title={"Project Title"}
          answer={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, id. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, id."
          }
        />
        <Collapse
          title={"Project Title"}
          answer={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, id. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, id."
          }
        />
      </div>
      <div className="bottom-nav">
        <img src={nav2} alt="" />
        <img src={nav3} alt="" />
        <FontAwesomeIcon icon={faPlus} />
        <img src={nav4} alt="" />
        <img src={nav1} alt="" />
      </div>
    </div>
  );
}

export default App;
