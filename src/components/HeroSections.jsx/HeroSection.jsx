import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "aos/dist/aos.css";
import { useState } from "react";
import toast from "react-hot-toast";
import client from "../../assets/client.png";
import heroImage1 from "../../assets/final-hero-img.png";
import line from "../../assets/line.png";
import stone from "../../assets/pator.png";
import store from "../../assets/store.png";
import tree from "../../assets/tree.png";
import "./HeroSection.css";

const HeroSection = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    toast.success("Message is successfull!");
  };
  return (
    <section className="appie-hero-area-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-content">
              <div className="hero-p-img">
                <img
                  className="img-fluid"
                  src={heroImage1}
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  data-aos-once="true"
                />
              </div>
              <div className="shapes">
                <div className="hero-shape-1">
                  <img src={tree} alt />
                </div>
                <div className="hero-shape-2">
                  <img src={store} alt />
                </div>
                <div className="hero-shape-3">
                  <img src={stone} alt />
                </div>
                <div className="hero-shape-4">
                  <img src={line} alt />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="appie-hero-content-2"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <span className="title_one">14 day free</span>
              <h1 className="appie-title">
                Ready to launch your app in one, <span>Application</span>
              </h1>
              <p>Find the best application in the appie.</p>
              <form onSubmit={handleSubmit}>
                <div className="input-box">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="info@appie.com"
                    value={name}
                  />
                  <FontAwesomeIcon icon={faEnvelope} />
                  <button type="submit">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </form>
              <div className="hero-users">
                <img className="img-fluid" src={client} alt />
                <span>
                  30k <span> Feedback</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="hero-shape-1">
        <img src="assets/images/shape/shape-9.png" alt />
      </div>
      <div className="hero-shape-2">
        <img src="assets/images/shape/shape-10.png" alt />
      </div>
      <div className="hero-shape-3">
        <img src="assets/images/shape/shape-11.png" alt />
      </div>
      <div className="hero-shape-4">
        <img src="assets/images/shape/shape-12.png" alt />
      </div> */}
    </section>
  );
};

export default HeroSection;
