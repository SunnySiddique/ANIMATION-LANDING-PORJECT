import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import downloadImage3 from "../../assets/features-shape-1.png";
import downloadImage2 from "../../assets/pator.png";
import downloadImage1 from "../../assets/tree.png";
import "./Download.css";

const Download = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="appie-download-content">
              <span className="short-head">Download Our App</span>
              <h3 className="title">App is available for free on app store</h3>
              <p>
                Jolly good quaint james bond victoria sponge happy days cras
                arse over blatant.
              </p>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faApple} />
                    <span>
                      Download for <span>iOS</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="item-2" href="#">
                    <FontAwesomeIcon icon={faGooglePlay} />
                    <span>
                      Download for <span>Android</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="download-shape-1">
        <img src={downloadImage1} alt />
      </div>
      <div className="download-shape-2">
        <img src={downloadImage2} alt />
      </div>
      <div className="download-shape-3">
        <img src={downloadImage3} alt />
      </div>
    </>
  );
};

export default Download;
