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
            </div>
            <div className="main-img-container">
              <div className="div1">
                <div className="div1-img">
                  <img className="ifect-img" src="../../../img/d1.jpg" alt="" />
                </div>
                <div className="div2-img">
                  <div className="div2-img-box">
                    <img
                      className="ifect-img"
                      src="../../../img/d2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="t4-box">
                    <h1 className="t4h1 ">T4</h1>
                  </div>
                </div>
              </div>
              <div className="div1">
                <div className="maindiv2">
                  <img className="ifect-img" src="../../../img/d3.jpg" alt="" />
                </div>
              </div>
              <div className="div1">
                <div className="div2-img">
                  <div className="div2-img-box">
                    <img
                      className="ifect-img"
                      src="../../../img/d4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="t4-box">
                    <h1 className="t4h1">TWS 3e</h1>
                  </div>
                </div>
                <div className="div1-img">
                  <img className="ifect-img" src="../../../img/d5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
