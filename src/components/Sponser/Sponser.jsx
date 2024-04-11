import "aos/dist/aos.css";
import sponserImage1 from "../../assets/sponser-img1.png";
import sponserImage10 from "../../assets/sponser-img10.png";
import sponserImage2 from "../../assets/sponser-img2.png";
import sponserImage3 from "../../assets/sponser-img3.png";
import sponserImage4 from "../../assets/sponser-img4.png";
import sponserImage5 from "../../assets/sponser-img5.png";
import sponserImage6 from "../../assets/sponser-img6.png";
import sponserImage7 from "../../assets/sponser-img7.png";
import sponserImage8 from "../../assets/sponser-img8.png";
import sponserImage9 from "../../assets/sponser-img9.png";
import sponserShape from "../../assets/sponser-shape.png";
import "./Sponser.css";


const Sponser = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12"
            data-aos="fade-down"
            // data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="sponser-header text-center">
              <h3 className="sponser-title">
                Appie works best with <br /> your favorite platforms
              </h3>
              <p>Join over 40,000 businesses worldwide.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12" style={{ position: "relative" }}>
            <div className="appie-sponser-box d-flex justify-content-center">
              <div
                className="sponser-item"
                data-aos="zoom-in-left"
                data-aos-delay="0"
              >
                <img className="img-fluid" src={sponserImage1} alt="" />
              </div>
              <div
                className="sponser-item"
                data-aos="zoom-in-left"
                data-aos-delay="200"
              >
                <img className="img-fluid" src={sponserImage2} alt="" />
              </div>
              <div
                className="sponser-item"
                data-aos="zoom-in-left"
                data-aos-delay="400"
              >
                <img className="img-fluid" src={sponserImage3} alt="" />
              </div>
              <div
                className="sponser-item"
                data-aos="zoom-in-left"
                data-aos-delay="600"
              >
                <img className="img-fluid" src={sponserImage4} alt="" />
              </div>
              <div
                className="sponser-item"
                data-aos="zoom-in-left"
                data-aos-delay="800"
              >
                <img className="img-fluid" src={sponserImage5} alt="" />
              </div>
              <div
                className="sponser-item"
                data-aos="zoom-in-left"
                data-aos-delay="1000"
              >
                <img className="img-fluid" src={sponserImage6} alt="" />
              </div>
            </div>
            <div className="appie-sponser-box item-2 d-flex justify-content-center">
              <div
                className="sponser-item"
                data-aos="zoom-in-left"
                data-aos-delay="1200"
              >
                <img className="img-fluid" src={sponserImage7} alt="" />
              </div>
              <div
                className="sponser-item"
                data-aos="zoom-in-left"
                data-aos-delay="1400"
              >
                <img className="img-fluid" src={sponserImage8} alt="" />
              </div>
              <div
                className="sponser-item"
                data-aos="zoom-in-left"
                data-aos-delay="1600"
              >
                <img className="img-fluid" src={sponserImage9} alt="" />
              </div>
              <div
                className="sponser-item"
                data-aos="zoom-in-left"
                data-aos-delay="1800"
              >
                <img className="img-fluid" src={sponserImage10} alt="" />
              </div>
            </div>
            <div className="sponser-shape">
              <img src={sponserShape} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponser;
