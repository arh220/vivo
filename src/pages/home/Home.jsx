import Layout from "../../components/layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <Layout>
      <div className="container1">
        <div className="banner-container">
          <div className="banner-mid-wraper">
            <h2 className="banner-mid-title">
              <span>More new products</span>
            </h2>

            <div className="banner-mid-card">
              <div className="banner-mid-box" data-aos="fade-up">
                <div className="banner-mid-img">
                  <img src="../../../img/2.jpg" alt="1" />
                </div>
              </div>

              <div className="banner-mid-box" data-aos="fade-up">
                <div className="banner-mid-img">
                  <img src="../../../img/3.jpg" alt="2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm-banner-container">
          <div className="banner-container">
            <div className="banner-sm-wraper">
              <h2 className="banner-sm-title">
                <span className="disc">DISCOVER</span>
              </h2>
              <ul className="banner-sm-box">
                <li className="li1">
                  <div className="img-card" data-aos="fade-up">
                    <img src="../../../img/d1.jpg" alt="" />
                  </div>
                </li>
                <li className="li2">
                  <div className="banner-sm-img">
                    <img src="../../../img/d3.jpg" alt="" />
                  </div>
                </li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
