import "./Css/Template27.css";
import { useState, useEffect, useRef } from "react";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import Stats from 'stats.js';

export const Template27 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);

    const statsRef = useRef(null);

  useEffect(() => {
    // Initialize particles.js
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 180,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: { value: '#ffffff' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: { opacity: 1 },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });

    // ✅ Stats.js setup with npm package
    const stats = new Stats();
    stats.showPanel(0); // 0: fps

    stats.dom.style.position = 'absolute';
    stats.dom.style.left = '0px';
    stats.dom.style.top = '0px';
    statsRef.current?.appendChild(stats.dom);

    const update = () => {
      stats.begin();
      stats.end();
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, []);


  return (
    <div>
      {loading && <Loader />}
      <main>
        <div
          className="dfgjhfgd"
          style={{ backgroundImage: "url(./images/afros.png)" }}
        >
          <div className="sdfghdfgdf col-lg-6">
            <h1 className="mt-0 mb-0">
              {serviceResponse.data?.banner_title &&
                serviceResponse.data.banner_title}
            </h1>

            <div
              className="mt-3 mb-5"
              dangerouslySetInnerHTML={{
                __html:
                  serviceResponse.data?.banner_description &&
                  serviceResponse.data.banner_description,
              }}
            />

            <div className="vbddds">
              <Link to="/contact-us" className="btn125">
                Contact Us
              </Link>
              <button className="btn126">Get In Touch With Us</button>
            </div>
          </div>

          <div className="dbfghsdf col-lg-6">
            {serviceResponse.data?.banner_image && (
              <img
                src={`${serviceResponse.image_url}/Templete_27/${serviceResponse.data.banner_image}`}
                alt=""
              />
            )}
          </div>
        </div>

        <div className="fjhfdfgdfg">
          <div className="custom-container">
            <div className="sdfsdfsdf">
              <h2>
                {serviceResponse.data?.second_section_title &&
                  serviceResponse.data.second_section_title}
              </h2>
              <div
                className="pt-4"
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.second_section_description &&
                    serviceResponse.data.second_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <ServiceEnquiryForm loading={setLoading} slug={slug} />

        <div className="dfbghdfgdfgdf">
          <div className="custom-container">
            <div className="mgjhbdfg">
              <h2>
                {serviceResponse.data?.third_section_title &&
                  serviceResponse.data.third_section_title}
              </h2>

              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.third_section_description &&
                    serviceResponse.data.third_section_description,
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="jindifrneurhrt_doeijewr overflow-hidden py-5" style={{ backgroundImage: "url(./images/30087676_v904-nunny-031-a.jpg)" }}
        >
          <div id="particles-js"></div>
          <div className="custom-container py-5">
            <div className="position-relative">
              <div className="row">
                <div className="col-lg-7 mb-5">
                  <div className="jikasdnudhwer_inner">
                    <h2 className="mb-4">
                      {serviceResponse.data?.fourth_section_title &&
                        serviceResponse.data.fourth_section_title}
                    </h2>

                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data?.fourth_section_description &&
                          serviceResponse.data.fourth_section_description,
                      }}
                    />

                    <Link to="/contact-us" className="btn126">
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="col-lg-5 mb-5">
                  <div className="dcsbnhgrffsfee sticky-top">
                    {serviceResponse.data?.fourth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_27/${serviceResponse.data.fourth_section_image}`}
                        alt=""
                        className="img-fluid"
                      />
                    )}
                  </div>
                </div>

                <div className="col-lg-5 mb-5">
                  <div className="dcsbnhgrffsfee sticky-top">
                    {serviceResponse.data?.fifth_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Templete_27/${serviceResponse.data.fifth_section_image}`}
                        alt=""
                        className="img-fluid"
                      />
                    )}
                  </div>
                </div>

                <div className="col-lg-7 mb-5">
                  <div className="jikasdnudhwer_inner">
                    <h2 className="mb-4">
                      {serviceResponse.data?.fifth_section_title &&
                        serviceResponse.data.fifth_section_title}
                    </h2>

                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          serviceResponse.data?.fifth_section_description &&
                          serviceResponse.data.fifth_section_description,
                      }}
                    />
                    <Link to="/contact-us" className="btn126">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LastSectionComponent />
      </main>
    </div>
  );
};
