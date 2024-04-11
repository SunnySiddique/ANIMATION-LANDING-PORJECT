import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
import aboutThumb from "../../assets/impression-img.png";
import "./Impression.css";

const Impression = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="appie-about-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-thumb">
                    <Image src={aboutThumb} alt="AboutThumb" fluid />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="appie_about_content">
                    <span>Marketing</span>
                    <h3 className="title">
                      Make a lasting impression with appie.
                    </h3>
                    <p>
                      Jolly good quaint james bond victoria sponge happy days
                      cras arse over blatant.
                    </p>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-6">
                      <div className="appie_about_service">
                        <div className="icon">
                          <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className="icon-content">
                          <h3>Carefully designed</h3>
                          <p>Mucker plastered bugger all mate morish are.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="appie_about_service">
                        <div className="icon">
                          <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className="icon-content">
                          <h3>Carefully designed</h3>
                          <p>Mucker plastered bugger all mate morish are.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impression;
