import "./Css/Template43.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

export const Template43 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
      <main>
        <div className="dfgjhfgd">
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
                src={`${serviceResponse.image_url}/Template_43/${serviceResponse.data.banner_image}`}
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

        <div
          className="doidadwew py-5 my-5"
          style={{
                background: "url('../images/scafcsd.jpg') no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "left"
            }}
        >
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-7 mb-4">
                <div className="deiwnrjwenr_left">
                  <h2>
                    {serviceResponse.data?.third_section_title &&
                      serviceResponse.data.third_section_title}
                  </h2>
                </div>
              </div>

              <div className="col-lg-7 offset-lg-5 mb-4">
                <div className="deiwnrjwenr_right">
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
          </div>
        </div>

        <div
          className="doidadwew py-5 my-5"
            style={{
                background: "url('../images/weqee.jpg') no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right"
            }}
        >
          <div className="custom-container">
            <div className="row">
              <div className="col-lg-7 offset-lg-5 mb-4">
                <div className="deiwnrjwenr_left">
                  <h2>
                    {serviceResponse.data?.fourth_section_title &&
                      serviceResponse.data.fourth_section_title}
                  </h2>
                </div>
              </div>

              <div className="col-lg-7 mb-4">
                <div className="deiwnrjwenr_right">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        serviceResponse.data?.fourth_section_description &&
                        serviceResponse.data.fourth_section_description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fjhfdfgdfg">
          <div className="custom-container">
            <div className="sdfsdfsdf">
              <h2>
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
            </div>
          </div>
        </div>
        <LastSectionComponent />
      </main>
    </div>
  );
};
