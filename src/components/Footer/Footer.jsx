import {
  faApple,
  faFacebook,
  faGooglePlay,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faArrowUp,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="footer-about-widget footer-about-widget-2">
              <div className="logo">
                <a href="#">
                  <img className="img-fluid" src={logo} alt />
                </a>
              </div>
              <p>
                Appie WordPress is theme is the last theme you will ever have.
              </p>
              <a href="#">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <div className="social mt-3 mb-4">
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12 col-12">
            <div className="footer-navigation footer-navigation-2">
              <h4 className="title">Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="footer-navigation footer-navigation-2">
              <h4 className="title">Support</h4>
              <ul>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">Faqs</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="footer-widget-info">
              <h4 className="title">Get In Touch</h4>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faEnvelope} /> support@appie.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faPhone} /> +(642) 342 762 44
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 442 Belle Terre St
                    Floor 7
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="footer-copyright">
              <div className="apps-download-btn">
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faApple} /> Download for iOS
                    </a>
                  </li>
                  <li>
                    <a className="item-2" href="#">
                      <FontAwesomeIcon icon={faGooglePlay} /> Download for
                      Android
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright-text">
                <p>Copyright © 2021 Appie. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-to-top back-to-top-2" style={{ display: "block" }}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </Link>
      </div>
    </>
  );
};

export default Footer;
