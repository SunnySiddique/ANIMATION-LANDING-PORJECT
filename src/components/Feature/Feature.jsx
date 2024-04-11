import Image from "react-bootstrap/Image";
import featureImage from "../../assets/fantastic-img.png";
import "./Feature.css";

import featureShpae3 from "../../assets/features-shape-1.png";
import featureShpae2 from "../../assets/pator.png";
import featureShpae1 from "../../assets/tree.png";

const Feature = () => {
  return (
    <>
      <div className="container">
        <div
          className="feature-header"
          data-aos="fade-down"
          // data-aos-offset="300"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h3 className="appie_feature_title1">
            Wherever you need <br /> us the most
          </h3>
          <p className="appie_feature_title2">
            The full monty spiffing good time no biggie cack grub fantastic.
          </p>
        </div>
        <div className="row mt-5 mb-5">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="appie_features_boxes">
              <div className="appie_features_item1">
                <h4>Well Integrated</h4>
                <p>The {`bee's`} knees chancer car boot absolutely.</p>
              </div>
              <div className="appie_features_item2">
                <h4>Clean and modern Design</h4>
                <p>The {`bee's`} knees chancer car boot absolutely.</p>
              </div>
              <div className="appie_features_item3">
                <h4>Light and dark mode</h4>
                <p>The {`bee's`} knees chancer car boot absolutely.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Image
              src={featureImage}
              alt=""
              fluid
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>
        </div>
        <div className="feature_shape_1">
          <img src={featureShpae1} alt="" />
        </div>
        <div className="feature_shape_2">
          <img src={featureShpae2} alt="" />
        </div>
        <div className="feature_shape_3">
          <img src={featureShpae3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Feature;
