import Layout from "../../components/layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
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
      <div className="bg-[#F5F7FA] w-full h-[1600px] flex items-start">
        <div className="bg-[#F5F7FA] w-[90%] h-[1600px] ml-30 mr-30">
          <div className="bg-[#F5F7FA] w-[90%] h-[1455px] ml-20  mt-20 mb-20">
            <span>
              <h1 className="text-4xl">More new products</h1>
            </span>
            <div className="inline-block overflow-hidden rounded-3xl w-full">
              <img
              data-aos="fade-up"
                className="mt-10 object-cover rounded-3xl w-[100%] transform transition-transform duration-1000 ease-in-out hover:scale-105"
                src="../../../img/2.jpg"
                alt="aaa"
              />
            </div>
            <div className="rounded-3xl w-full">
              <img
              data-aos="fade-up"
                className="mt-10 object-cover rounded-3xl w-[100%] transform transition-transform duration-1000 ease-in-out hover:scale-105"
                src="../../../img/3.jpg"
                alt="aaa"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F7FA] w-full h-[1150px] flex items-start">
        <div className="bg-[#F5F7FA] w-[90%] h-[1000px] ml-30 mr-30">
          <div className="bg-[#F5F7FA] w-[90%] h-[1000px] ml-20  mt-20 mb-20">
            <span>
              <h1 className="text-4xl">DISCOVER</h1>
            </span>
            <div className="bg-[#F5F7FA] w-full h-[1000] mt-10 flex justify-between">
              <div className="  bg-[#F5F7FA] h-full w-[31%]">
                <div className="bg-[#F5F7FA] h-[25%] w-full inline-block overflow-hidden rounded-3xl">
                  <img
                  data-aos="fade-up"
                  data-aos-delay="0"
        data-aos-duration="600"
                    className=" object-cover rounded-3xl w-[100%] transform transition-transform duration-1000 ease-in-out hover:scale-105"
                    src="../../../img/d1.jpg"
                    alt="aaa"
                  />
                </div>
                <div className="bg-red h-[35%] w-full mt-10 inline-block overflow-hidden rounded-3xl">
                  <div className="bg-green"> <img
                  data-aos="fade-up"
                  data-aos-delay="600"
        data-aos-duration="600"
                    className=" object-cover rounded-3xl w-[100%] transform transition-transform duration-1000 ease-in-out hover:scale-105"
                    src="../../../img/d2.jpg"
                    alt="aaa"
                  /></div>
                  <div><span>
                    <h1 className="text-2xl ml-10 mt-15">T4</h1>
                  </span></div>
                </div>
              </div>
              <div className=" bg-[#F5F7FA] h-full w-[31%]">
                <div className="bg-[#F5F7FA] h-[100%] w-full inline-block overflow-hidden rounded-3xl">
                  <img
                  data-aos="fade-up"
                  data-aos-delay="150"
                          data-aos-duration="600"
                    className=" object-cover rounded-3xl h-[53%] w-[100%] transform transition-transform duration-1000 ease-in-out hover:scale-105"
                    src="../../../img/d3.jpg"
                    alt="aaa"
                  />
                </div>
              </div>
              <div className="bg-[#F5F7FA] h-full w-[31%]">
                <div className="bg-white h-[40%] w-full inline-block overflow-hidden rounded-3xl">
                  <img
                  data-aos="fade-up"
                  data-aos-delay="300"
                          data-aos-duration="600"
                    className=" object-cover rounded-3xl w-[100%] transform transition-transform duration-1000 ease-in-out hover:scale-105"
                    src="../../../img/d4.jpg"
                    alt="aaa"
                  />
                  <span>
                    <h1 className="text-2xl ml-10 mt-20">TWS 3e</h1>
                  </span>
                </div>
                <div className="bg-[#F5F7FA] h-[40%] w-full mt-15 inline-block overflow-hidden rounded-3xl ">
                  <img
                  data-aos="fade-up"
                  data-aos-delay="1200"
        data-aos-duration="600"
                    className=" object-cover rounded-3xl w-[100%] transform transition-transform duration-1000 ease-in-out hover:scale-105"
                    src="../../../img/d5.jpg"
                    alt="aaa"
                  />
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
