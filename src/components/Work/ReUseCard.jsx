import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Work.css";

const ReUseCard = ({ header, title, icon, backgroundColor, borderColor }) => {
  const cardStyle = {
    '--border-top-color': borderColor
  };

  return (
    <>
      <div className="wrok_content_wrpper mb-5" style={cardStyle}>
        <div className="work_card_title">
          <div className="icon" style={{ backgroundColor }}>
            <FontAwesomeIcon icon={icon} />
          </div>
          <h4>{header}</h4>
          <p>
            {title}
          </p>
          <a href="#" className="red_title">
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ReUseCard;
