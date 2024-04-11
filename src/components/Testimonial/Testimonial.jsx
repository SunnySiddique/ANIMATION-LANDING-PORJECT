import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import Slider from "react-slick";
import TestimonalImage from "../../assets/clinet-img-1.png";
import "./Testimonial.css";

const Testimonial = () => {
  const slideRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12" style={{ position: "relative" }}>
          <Slider ref={slideRef} {...settings} style={{ width: "100%" }}>
            <div>
              <div className="appie-testimonial-main">
                <div className="appie-thumb">
                  <img className="img-fluid" src={TestimonalImage} alt="" />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                  </ul>
                  <span>(4.7) review</span>
                </div>
                <div className="content" style={{ padding: "0px" }}>
                  <div className="item">
                    <p>
                      Why I say old chap that is spiffing chip shop such a
                      fibber the {`bee's`} knees, the wireless Richard fantastic
                      do one cracking goal pukka baking cakes starkers mush{" "}
                      {`don't`} get shirty with me argy bargy, I naff chimney
                      pot blimey he lost his bottle cup.
                    </p>
                    <div className="author">
                      <div className="author-title">
                        <h5>Sunny Siddique</h5>
                        <span>Web developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="appie-testimonial-main">
                <div className="appie-thumb">
                  <img className="img-fluid" src={TestimonalImage} alt="" />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                  </ul>
                  <span>(4.7) review</span>
                </div>
                <div className="content" style={{ padding: "0px" }}>
                  <div className="item">
                    <p>
                      Why I say old chap that is spiffing chip shop such a
                      fibber the {`bee's`} knees, the wireless Richard fantastic
                      do one cracking goal pukka baking cakes starkers mush{" "}
                      {`don't`} get shirty with me argy bargy, I naff chimney
                      pot blimey he lost his bottle cup.
                    </p>
                    <div className="author">
                      <div className="author-title">
                        <h5>Sunny Siddique</h5>
                        <span>Web developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="appie-testimonial-main">
                <div className="appie-thumb">
                  <img className="img-fluid" src={TestimonalImage} alt="" />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faStar} />
                    </li>
                  </ul>
                  <span>(4.7) review</span>
                </div>
                <div className="content" style={{ padding: "0px" }}>
                  <div className="item">
                    <p>
                      Why I say old chap that is spiffing chip shop such a
                      fibber the {`bee's`} knees, the wireless Richard fantastic
                      do one cracking goal pukka baking cakes starkers mush{" "}
                      {`don't`} get shirty with me argy bargy, I naff chimney
                      pot blimey he lost his bottle cup.
                    </p>
                    <div className="author">
                      <div className="author-title">
                        <h5>Sunny Siddique</h5>
                        <span>Web developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="arrow-icons">
            <span className="prev" onClick={() => slideRef.current.slickPrev()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <span className="next" onClick={() => slideRef.current.slickNext()}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
