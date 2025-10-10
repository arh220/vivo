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
      <div className="w-full overflow-hidden">
        <div className="bg-[#F5F7FA] w-full flex items-start">
          <div className="bg-[#F5F7FA] w-[90%]  mx-30">
            <div className="bg-[#F5F7FA] ">
              <div className="w-full bg-[#F5F7FA] my-10">
                <span>
                  <h1 className="text-4xl">More new products</h1>
                </span>
              </div>
              <div
                className="overflow-hidden rounded-3xl w-full mt-10 "
                data-aos="fade-up"
              >
                <img
                  className="object-cover rounded-3xl w-full transition-all ease-in-out hover:scale-105"
                  src="../../../img/2.jpg"
                  alt="aaa"
                />
              </div>
              <div
                className="overflow-hidden rounded-3xl w-full mt-10"
                data-aos="fade-up"
              >
                <img
                  className="object-cover rounded-3xl w-full transition-all ease-in-out hover:scale-105"
                  src="../../../img/3.jpg"
                  alt="aaa"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F7FA] w-full  flex items-start">
          <div className="bg-[#F5F7FA] w-[90%]  ">
            <div className="bg-[#F5F7FA] w-[90%] items-center mt-20 mb-20">
              <span>
                <h1 className="text-4xl">DISCOVER</h1>
              </span>
              <div className="bg-[#F5F7FA] w-full mt-10 flex justify-between">
                <div className="  bg-[#F5F7FA]  w-[31%]">
                  <div className="bg-[#F5F7FA]  w-full inline-block overflow-hidden rounded-3xl">
                    <img
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="600"
                      className=" object-cover rounded-3xl w-[100%] transform transition-transform duration-1000 ease-in-out hover:scale-105"
                      src="../../../img/d1.jpg"
                      alt="aaa"
                    />
                  </div>
                  <div className="bg-[#F5F7FA]  w-full mt-10 inline-block rounded-3xl">
                    <div className="overflow-hidden rounded-t-3xl w-full">
                      <img
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="600"
                        className="object-cover w-full  transform transition-transform duration-1000 ease-in-out hover:scale-105 rounded-t-3xl"
                        src="../../../img/d2.jpg"
                        alt="aaa"
                      />
                    </div>
                    <div className="bg-white h-[30%] rounded-b-3xl flex items-center pl-10">
                      <h1 className="text-2xl pl-10 p-10">T4</h1>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F5F7FA]  w-[31%]">
                  <div className="bg-[#F5F7FA]  w-full inline-block overflow-hidden rounded-3xl">
                    <img
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-duration="600"
                      className="object-cover rounded-3xl  w-full transform transition-transform duration-1000 ease-in-out hover:scale-105 "
                      src="../../../img/d3.jpg"
                    />
                  </div>
                </div>

                <div className="  bg-[#F5F7FA]  w-[31%]">
                  <div className="bg-[#F5F7FA]  w-full inline-block rounded-3xl">
                    <div className="overflow-hidden rounded-t-3xl h-[70%]">
                      <img
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="600"
                        className="object-cover  w-full transform transition-transform duration-1000 ease-in-out hover:scale-105 rounded-t-3xl"
                        src="../../../img/d4.jpg"
                        alt="aaa"
                      />
                    </div>

                    <div className="bg-white  rounded-b-3xl flex items-center pl-10">
                      <h1 className="text-2xl ">TWS 3e</h1>
                    </div>
                  </div>
                  <div className="bg-[#F5F7FA]  w-full inline-block overflow-hidden rounded-3xl mt-10">
                    <img
                      data-aos="fade-up"
                      data-aos-delay="0"
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
      </div>
    </Layout>
  );
};

export default Home;
