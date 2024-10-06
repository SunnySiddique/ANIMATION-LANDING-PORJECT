import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Navbars.css";

import "aos/dist/aos.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import resLogo from "../../assets/responsive-logo.png";
import HeroSection from "../HeroSections.jsx/HeroSection";

const Navbars = () => {
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("responsive-items");
  const [overlay, setOverlay] = useState(false); // Add overlay state

  const navToggle = () => {
    if (active === "responsive-items") {
      setActive("responsive-items nav_active");
      setOverlay(true);
    } else {
      setActive("responsive-items");
      setOverlay(false);
    }
  };

  const listOfNav = [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "Work", href: "work" },
    { id: 3, name: "Impression", href: "impression" },
    { id: 4, name: "Feature", href: "feature" },
    { id: 5, name: "Counter", href: "counter" },
    { id: 7, name: "Download", href: "download" },
    { id: 8, name: "Pricing", href: "pricing" },
    { id: 9, name: "Sponser", href: "sponser" },
  ];

  const ChangeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", ChangeBackground);

  return (
    <>
      <header data-aos-once="true">
        <nav
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          <div className={`${scroll ? "navbars active" : "navbars"}`}>
            <div className="container">
              <div className="navbar">
                <div className="one-side">
                  <a href="#" className="logo">
                    <img src={logo} alt="logo" />
                  </a>
                  <div className="items  d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">
                    <ul>
                      {listOfNav.map((nav) => (
                        <li key={nav.id} style={{ cursor: "pointer" }}>
                          <Link to={nav.href} offset={-100} duration={500}>
                            {nav.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* responsive navar */}

                {active && (
                  <div className={`${active}`}>
                    <div className="cls-icon" onClick={navToggle}>
                      <FontAwesomeIcon icon={faClose} />
                    </div>
                    <div className="res-logo">
                      <img src={resLogo} alt="" />
                    </div>
                    <ul>
                      {listOfNav.map((nav) => (
                        <li key={nav.id}>
                          <Link
                            to={nav.href}
                            onClick={navToggle}
                            offset={-100}
                            duration={500}
                          >
                            {nav.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* responsive navar */}

                <div className="second-side">
                  <div className="btn">
                    <button type="button">Get Started</button>
                  </div>

                  <div className="menu-icon d-xxl-none d-xl-none d-lg-block d-md-block d-sm-block ">
                    <FontAwesomeIcon icon={faBars} onClick={navToggle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="" id="home">
          <HeroSection />
        </div>
        {overlay && <div className="overlay" onClick={navToggle}></div>}
      </header>
      {/* {active && <div className="overlay"></div>} */}
    </>
  );
};

export default Navbars;
