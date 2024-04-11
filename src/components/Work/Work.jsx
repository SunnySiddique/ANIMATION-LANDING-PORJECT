import {
  faBell,
  faBoltLightning,
  faCog,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import ReUseCard from "./ReUseCard";
import "./Work.css";

const Work = () => {
  return (
    <>
      <div className="container">
        <div
          className="main-header"
          data-aos="fade-right"
          // data-aos-offset="300"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="appie-section-title">
            <h3 className="appie-title">How does it work</h3>
            <p>
              The full monty spiffing good time no biggie cack grub fantastic.{" "}
            </p>
          </div>
          <div className="appie-section-title text-right">
            <a className="main-btn" href="#">
              View all Features <i className="fal fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <ReUseCard
              icon={faBoltLightning}
              header="Fast and intuitive"
              title="Oxford posh bevvy give us a bell gutted mate spend a penny quaint cockup plastered."
              backgroundColor="#2eacfc"
              borderColor="#2eacfc"
            />
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <ReUseCard
              icon={faBoltLightning}
              header="Fast and intuitive"
              title="Oxford posh bevvy give us a bell gutted mate spend a penny quaint cockup plastered."
              backgroundColor="#ea4c89"
              borderColor="#ea4c89"
            />
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <ReUseCard
              icon={faBell}
              header="Fast and intuitive"
              title="Oxford posh bevvy give us a bell gutted mate spend a penny quaint cockup plastered."
              backgroundColor="#f67741"
              borderColor="#f67741"
            />
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <ReUseCard
              icon={faBell}
              header="Fast and intuitive"
              title="Oxford posh bevvy give us a bell gutted mate spend a penny quaint cockup plastered."
              backgroundColor="#f67741"
              borderColor="#f67741"
            />
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <ReUseCard
              icon={faCog}
              header="Fast and intuitive"
              title="Oxford posh bevvy give us a bell gutted mate spend a penny quaint cockup plastered."
              backgroundColor="#6a88f7"
              borderColor="#6a88f7"
            />
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <ReUseCard
              icon={faLock}
              header="Fast and intuitive"
              title="Oxford posh bevvy give us a bell gutted mate spend a penny quaint cockup plastered."
              backgroundColor="#3ab094"
              borderColor="#3ab094"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
