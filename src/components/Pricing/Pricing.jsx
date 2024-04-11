import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <div className="container">
        <div className="appie-section-title text-center">
          <div data-aos="fade-down" data-aos-duration="3000">
            <h3 className="appie-title">Simple pricing for Everyone</h3>
            <p>
              The full monty spiffing good time no biggie cack grub fantastic.{" "}
            </p>
            <div className="appie-pricing-tab-btn">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Monthly
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <PriceCard
                head="Fresh"
                supTitle="04"
                trialTitle="Get your 14 day free trial"
                iconTitle="15 GB cloud storage"
              />
            </div>
            <div
              className="col-lg-4 col-md-6"
              style={{ position: "relative" }}
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <PriceCard
                head="Sweet"
                sup="$"
                supTitle="16"
                monthTitle="/month"
                trialTitle="Billed $276 per website annually."
                iconTitle=" 50 GB cloud storage"
              />
              <div className="pricing-rebon">
                <span>Most Popular</span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <PriceCard
                head="Juicy"
                sup="$"
                supTitle="27"
                monthTitle="/month"
                trialTitle="Billed $276 per website annually."
                iconTitle="Data security"
                iconTitle2=" 100 GB cloud storage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function PriceCard({ head, supTitle, trialTitle, iconTitle, iconTitle2 }) {
  return (
    <div className="pricing-card-main">
      <div className="pricing-header">
        <h6>{head}</h6>
        <div className="price-range">
          <sup>$</sup>
          <span>{supTitle}</span>
          <p>/month</p>
        </div>
        <p>{trialTitle}</p>
      </div>
      <div className="price-body">
        <ul>
          <div className="icon-1">
            <li>
              <FontAwesomeIcon icon={faCheck} />
            </li>
            <span> 60-day chat history</span>
          </div>
          <div className="icon-2">
            <li>
              <FontAwesomeIcon icon={faCheck} />
            </li>
            <span>{iconTitle}</span>
          </div>
          {iconTitle2 && (
            <div className="icon-2">
              <li>
                <FontAwesomeIcon icon={faCheck} />
              </li>
              <span>{iconTitle2}</span>
            </div>
          )}
          <div className="icon-3">
            <li>
              <FontAwesomeIcon icon={faCheck} />
            </li>
            <span> 24/7 Support</span>
          </div>
        </ul>
        <div className="pricing-btn">
          <a className="main-btn" href="#">
            Choose plan
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
