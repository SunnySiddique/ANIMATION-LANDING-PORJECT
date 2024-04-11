import Counter from "../components/Counter/Counter";
import Download from "../components/Download/Download";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
import Impression from "../components/Impression/Impression";
import Navbars from "../components/Navbar/Navbars";
import Pricing from "../components/Pricing/Pricing";
import Sponser from "../components/Sponser/Sponser";
import Testimonial from "../components/Testimonial/Testimonial";
import Video from "../components/Video/Video";
import Work from "../components/Work/Work";

const Main = () => {
  return (
    <>
      <Navbars />

      <main>
        <section
          className="globar-padding"
          id="work"
          style={{ marginTop: "100px" }}
        >
          <Work />
        </section>
        <section className="globar-padding" id="impression">
          <Impression />
        </section>
        <section className="globar-padding feature-bg" id="feature">
          <Feature />
        </section>
        <section className="globar-padding" id="counter">
          <Counter />
        </section>
        <section className="globar-padding" id="video">
          <Video />
        </section>
        <section
          className="globar-padding download-bg"
          id="download"
          data-aos="slide-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Download />
        </section>
        <section className="globar-padding" id="pricing">
          <Pricing />
        </section>
        <section
          className="globar-padding testimonial-bg container"
          id="testimonial"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Testimonial />
        </section>
        <section className="globar-padding" id="sponser">
          <Sponser />
        </section>
      </main>

      <footer className="footer-bg" data-aos="fade-up" data-aos-duration="3000">
        <Footer />
      </footer>
    </>
  );
};

export default Main;
