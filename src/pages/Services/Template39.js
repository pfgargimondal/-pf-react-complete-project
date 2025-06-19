import "./Css/Template39.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ServiceEnquiryForm from "./FormComponent/ServiceEnquiryForm";
import { Link } from "react-router-dom";
import LastSectionComponent from "./SectionComponent/LastSectionComponent";
import Loader from "../../component/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const Template39 = ({ serviceResponse, slug }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
                src={`${serviceResponse.image_url}/Template_39/${serviceResponse.data.banner_image}`}
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
        <div className="sdvggsdcsd">
          <div className="custom-container">
            <div className="bjvbffbgf">
              <div className="row">
                <div className="col-lg-6">
                  <div className="fdnvhjfdv">
                    {serviceResponse.data?.third_section_image && (
                      <img
                        src={`${serviceResponse.image_url}/Template_39/${serviceResponse.data.third_section_image}`}
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="sdbghcsdcsd">
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
                    <button onClick={() => navigate("/contact-us")}>
                      Contact Us <i className="fa-solid fa-angles-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fjhfdfgdfg">
          <div className="custom-container">
            <div className="sdfsdfsdf">
              <h2>
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
            </div>
          </div>
        </div>

        <div
          className="vnhdfiuvhfdbfd"
          style={{ backgroundImage: "url(./images/d.png)" }}
        >
          <div className="custom-container">
            <div className="fkuyfdfrdgf">
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

            <div className="fvbnjfdvfdgfd">
              <div className="row">
                <div className="col-lg-6">
                  <div className="fhvgfdfd">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="ujhfgfg">
                          {serviceResponse.data?.fifth_section_image_one && (
                            <img
                              src={`${serviceResponse.image_url}/Template_39/${serviceResponse.data.fifth_section_image_one}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="fdbvhjfyfdg">
                          <h6>
                            {serviceResponse.data?.fifth_section_title_one &&
                              serviceResponse.data.fifth_section_title_one}
                          </h6>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data
                                  ?.fifth_section_description_one &&
                                serviceResponse.data
                                  .fifth_section_description_one,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="fhvgfdfd">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="ujhfgfg">
                          {serviceResponse.data?.fifth_section_image_two && (
                            <img
                              src={`${serviceResponse.image_url}/Template_39/${serviceResponse.data.fifth_section_image_two}`}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="fdbvhjfyfdg">
                          <h6>
                            {serviceResponse.data?.fifth_section_title_two &&
                              serviceResponse.data.fifth_section_title_two}
                          </h6>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                serviceResponse.data
                                  ?.fifth_section_description_two &&
                                serviceResponse.data
                                  .fifth_section_description_two,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vhfdhhgfdfdg">
          <div className="custom-container">
            <div className="fdghufgfdgf">
              <h2>
                {serviceResponse.data?.sixth_section_title &&
                  serviceResponse.data.sixth_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    serviceResponse.data?.sixth_section_description &&
                    serviceResponse.data.sixth_section_description,
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
