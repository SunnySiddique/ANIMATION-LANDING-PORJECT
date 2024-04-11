import {
  faArrowLeft,
  faArrowRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slideVideo1 from "../../assets/avatar-1.jpg";
import slideVideo2 from "../../assets/avtar-img.jpg";
import videoImage from "../../assets/video-img.jpg";
import "./Video.css";

const Video = () => {
  const slideRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="container">
        <div
          className="row"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="col-lg-8">
            <div className="appie_video_player_item">
              <div className="thumb">
                <img className="img-fluid" src={videoImage} alt="" />
                <div className="video_popup">
                  <div className="a">
                    <a href="https://www.youtube.com/watch?v=EE7NqzhMDms&ab_channel=BusinessInsider">
                      <FontAwesomeIcon icon={faPlay} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="content">
              <h3 className="title">
                Watch the two-minute video to learn how.
              </h3>
              <p>
                The wireless cheesed on your bike mate zonked a load of old tosh
                hunky dory {`it's`} all gone to pot haggle william car boot pear
                shaped geeza.
              </p>
              <a className="main-btns" href="#">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <Slider ref={slideRef} {...settings}>
              <div style={{ outline: "none" }}>
                <img
                  className="img-fluid"
                  src={slideVideo1}
                  alt="Placeholder"
                />
              </div>
              <div style={{ outline: "none" }}>
                <img
                  className="img-fluid"
                  src={slideVideo2}
                  alt="Placeholder"
                />
              </div>
              {/* Add other carousel items here */}
            </Slider>

            <div className="arrow-icon">
              <span
                className="prev slick-arrow"
                onClick={() => slideRef.current.slickPrev()}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
              <span
                className="next slick-arrow"
                onClick={() => slideRef.current.slickNext()}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
