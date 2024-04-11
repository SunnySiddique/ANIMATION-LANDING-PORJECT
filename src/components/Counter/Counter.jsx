import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import okSmileEmoji from "../../assets/ok-smile-emoji.svg";
import smileEmoji from "../../assets/smile-emoji.svg";
import toffie from "../../assets/toffie.svg";
import user from "../../assets/user.svg";

import "./Counter.css";

const Counter = () => {
  const [counters, setCounters] = useState({
    user: { start: 0, end: 45 },
    toffie: { start: 0, end: 108 },
    smileEmoji: { start: 0, end: 307 },
    okSmileEmoji: { start: 0, end: 725 },
  });
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    const updateCounter = (counter, delay) => {
      setTimeout(() => {
        setCounters((prevCounters) => ({
          ...prevCounters,
          [counter]: {
            ...prevCounters[counter],
            start: prevCounters[counter].end,
          },
        }));
      }, delay);
    };

    updateCounter("user", 0); // no delay for the first counter
    updateCounter("toffie", 500); // 0.5 second delay for the second counter
    updateCounter("smileEmoji", 1000); // 1 second delay for the third counter
    updateCounter("okSmileEmoji", 1500); // 1.5 second delay for the fourth counter
  }, []);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="container">
        <div
          className="appie-section-title"
          data-aos="fade-down"
          // data-aos-offset="300"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h3 className="appie-title">How does it work</h3>
          <p>
            The full monty spiffing good time no biggie cack grub fantastic.
          </p>
        </div>

        {counterOn && (
          <div className="row mt-5">
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-out-left"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              <CounterImage
                image={user}
                head={counters.user.start}
                title="Active Installation"
              />
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-out-left"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              <CounterImage
                image={toffie}
                head={counters.toffie.start}
                title="Active Installation"
              />
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-out-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              <CounterImage
                image={smileEmoji}
                head={counters.smileEmoji.start}
                title="Active Installation"
              />
            </div>
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-out-left"
              data-aos-delay="1500"
              data-aos-duration="1500"
            >
              <CounterImage
                image={okSmileEmoji}
                head={counters.okSmileEmoji.start}
                title="Active Installation"
              />
            </div>
          </div>
        )}
      </div>
    </ScrollTrigger>
  );
};

export default Counter;

function CounterImage({ image, head, title }) {
  return (
    <div className="counter-content mb-5">
      <div className="icon">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <h3>
        <CountUp end={head} duration={8} suffix="+" />
      </h3>
      <p>{title}</p>
    </div>
  );
}
